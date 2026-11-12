import assert from "node:assert/strict"
import test from "node:test"
import { createLeadPayload, leadSubmissionBody } from "../lib/leads.ts"

const input = {
  name: " Ada ",
  business: "North Shop",
  phone: "2545550100",
  email: "ada@example.com",
  need: "New cameras",
  page: "/cameras",
  campaign: "cameras",
  fields: { cameraCount: " 8 ", blank: "   " },
}

test("createLeadPayload trims core fields, drops blank extras, and stamps the time", () => {
  const lead = createLeadPayload(input, "2026-11-12T12:00:00.000Z")

  assert.deepEqual(lead, {
    name: "Ada",
    business: "North Shop",
    phone: "2545550100",
    email: "ada@example.com",
    need: "New cameras",
    page: "/cameras",
    campaign: "cameras",
    fields: { cameraCount: "8" },
    submittedAt: "2026-11-12T12:00:00.000Z",
  })
})

test("submission body keeps page and campaign, and extras cannot override email", () => {
  const lead = createLeadPayload(
    {
      ...input,
      fields: { email: "override@example.com", cameraCount: "8" },
    },
    "2026-11-12T12:00:00.000Z",
  )
  const body = leadSubmissionBody(lead)

  assert.equal(body.email, "ada@example.com")
  assert.equal(body.page, "/cameras")
  assert.equal(body.campaign, "cameras")
  assert.equal(body.cameraCount, "8")
  assert.equal(body.submittedAt, "2026-11-12T12:00:00.000Z")
  assert.equal(body._subject, "Quote request from /cameras")
})

test("a blank name is rejected before anything is sent", () => {
  assert.throws(() => createLeadPayload({ ...input, name: " " }), /missing name/)
})
