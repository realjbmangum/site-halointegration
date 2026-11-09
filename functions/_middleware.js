// Pages `_redirects` matches a path and nothing else, so it cannot send
// www.halointegration.com to the apex. Without this file, www answers 200
// with a full copy of every page. The canonical points at the apex, but the
// host is still a duplicate.
//
// A root middleware runs in front of static files. www gets a 301 to the same
// path and query on https://halointegration.com. Every other host (the apex,
// and preview *.pages.dev hostnames) must call next(). next() is what hands
// the request to the asset server, which is where `_redirects`, `_headers`,
// and the trailing-slash 308 actually run. Returning our own response for
// those hosts would drop all three.
//
// The function only sees a www request when that hostname is routed to this
// Pages project. The www DNS record has to stay proxied through Cloudflare
// and attached as a custom domain.

const WWW_HOSTNAME = "www.halointegration.com";
const APEX_ORIGIN = "https://halointegration.com";

export async function onRequest(context) {
  if (requestHostname(context.request) !== WWW_HOSTNAME) {
    return context.next();
  }

  const url = new URL(context.request.url);
  const target = new URL(url.pathname + url.search, APEX_ORIGIN);
  return Response.redirect(target.toString(), 301);
}

function requestHostname(request) {
  const header = request.headers.get("host");
  const raw = header && header.trim() ? header : new URL(request.url).host;
  return raw
    .split(",")[0]
    .trim()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "")
    .toLowerCase();
}
