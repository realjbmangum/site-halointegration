import assert from "node:assert/strict";
import { test } from "node:test";
import { onRequest } from "../functions/_middleware.js";

function call(url, host, init = {}) {
  let nextCalls = 0;
  const asset = new Response("asset", {
    status: 200,
    headers: { "x-robots-tag": "noindex" },
  });
  const request = new Request(url, {
    ...init,
    headers: { ...(init.headers || {}), ...(host ? { host } : {}) },
  });
  const responsePromise = onRequest({
    request,
    next() {
      nextCalls += 1;
      return asset;
    },
  });
  return responsePromise.then((response) => ({ response, nextCalls, asset }));
}

test("www redirects to the apex and keeps the path and query", async () => {
  const { response, nextCalls } = await call(
    "http://127.0.0.1/services/structured-cabling/?utm=test&q=a%20b",
    "www.halointegration.com"
  );
  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get("location"),
    "https://halointegration.com/services/structured-cabling/?utm=test&q=a%20b"
  );
  assert.equal(nextCalls, 0);
});

test("www keeps a slashless path so the trailing-slash 308 still happens on the apex", async () => {
  const { response } = await call(
    "http://127.0.0.1/about",
    "www.halointegration.com"
  );
  assert.equal(response.headers.get("location"), "https://halointegration.com/about");
});

test("www keeps a retired path instead of applying the path redirect itself", async () => {
  const { response } = await call(
    "http://127.0.0.1/redesign/services",
    "www.halointegration.com"
  );
  assert.equal(
    response.headers.get("location"),
    "https://halointegration.com/redesign/services"
  );
});

test("host match is case-insensitive and ignores a port or trailing dot", async () => {
  for (const host of [
    "WWW.HaloIntegration.com",
    "www.halointegration.com:443",
    "www.halointegration.com.",
  ]) {
    const { response, nextCalls } = await call("http://127.0.0.1/projects/?q=1", host);
    assert.equal(
      response.headers.get("location"),
      "https://halointegration.com/projects/?q=1",
      host
    );
    assert.equal(nextCalls, 0, host);
  }
});

test("www redirect uses the request URL when the Host header is absent", async () => {
  const { response, nextCalls } = await call(
    "https://www.halointegration.com/contact/?a=1"
  );
  assert.equal(
    response.headers.get("location"),
    "https://halointegration.com/contact/?a=1"
  );
  assert.equal(nextCalls, 0);
});

test("non-www hosts call next() and return that response unchanged", async () => {
  for (const host of [
    "halointegration.com",
    "halointegration.com:443",
    "preview-abc.halointegration.pages.dev",
    "cursor-www-apex-301-f04c.halointegration.pages.dev",
    "localhost",
    "www.halointegration.com.evil.example",
    "notwww.halointegration.com",
    "www.halointegration.co",
  ]) {
    const { response, nextCalls, asset } = await call(
      "https://example.test/about/",
      host
    );
    assert.equal(nextCalls, 1, host);
    assert.equal(response, asset, host);
  }
});

test("a POST to www is still a 301 to the same path", async () => {
  const { response, nextCalls } = await call(
    "http://127.0.0.1/contact/?z=1",
    "www.halointegration.com",
    { method: "POST" }
  );
  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get("location"),
    "https://halointegration.com/contact/?z=1"
  );
  assert.equal(nextCalls, 0);
});
