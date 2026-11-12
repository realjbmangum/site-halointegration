/**
 * Landing-page lead delivery.
 *
 * This module is the only place a campaign quote is shaped and sent. Both
 * landing forms call submitLead with the same payload. When the planned
 * back-office exists, change submitLead so it POSTs that payload to the
 * API. Do not build the back-office here, and do not add another email
 * vendor or a secret.
 *
 * The payload is the contract:
 *   name, business, phone, email, need, page, campaign, fields, submittedAt
 *
 * `fields` holds answers that are not on every form (camera count, drops,
 * timeline). `page` is the path ("/cameras"). `campaign` is the stable
 * slug ("cameras", "structured-cabling"). `submittedAt` is an ISO timestamp
 * set here, not by the form.
 *
 * Delivery today is the Formspree endpoint the contact page already uses.
 * The id is public: it has shipped in the client bundle since the contact
 * form did. It is not a credential.
 *
 * The contact page calls postForm with its own field names. Those names are
 * what the existing Formspree notifications expect, so this change does not
 * reshape that submission. Point the contact form at the back-office later,
 * in its own change, if it should share this payload.
 */

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwykanv"

export type LeadInput = {
  name: string
  business: string
  phone: string
  email: string
  need: string
  page: string
  campaign: string
  fields?: Record<string, string>
}

export type LeadPayload = {
  name: string
  business: string
  phone: string
  email: string
  need: string
  page: string
  campaign: string
  fields: Record<string, string>
  submittedAt: string
}

const CORE_KEYS = [
  "name",
  "business",
  "phone",
  "email",
  "need",
  "page",
  "campaign",
] as const

export function createLeadPayload(
  input: LeadInput,
  submittedAt = new Date().toISOString(),
): LeadPayload {
  const trimmed = {
    name: input.name?.trim() ?? "",
    business: input.business?.trim() ?? "",
    phone: input.phone?.trim() ?? "",
    email: input.email?.trim() ?? "",
    need: input.need?.trim() ?? "",
    page: input.page?.trim() ?? "",
    campaign: input.campaign?.trim() ?? "",
  }

  const missing = CORE_KEYS.filter((key) => !trimmed[key])
  if (missing.length > 0) {
    throw new Error(`Lead is missing ${missing.join(", ")}`)
  }

  const fields: Record<string, string> = {}
  for (const [key, value] of Object.entries(input.fields ?? {})) {
    const clean = value.trim()
    if (clean) fields[key] = clean
  }

  return { ...trimmed, fields, submittedAt }
}

/**
 * Formspree shows top-level keys in the notification email. Core fields are
 * written after `fields` so an extra answer cannot overwrite name, email,
 * page, or campaign. `_subject` is a Formspree control and is not part of
 * LeadPayload.
 */
export function leadSubmissionBody(lead: LeadPayload): Record<string, string> {
  return {
    ...lead.fields,
    name: lead.name,
    business: lead.business,
    phone: lead.phone,
    email: lead.email,
    need: lead.need,
    page: lead.page,
    campaign: lead.campaign,
    submittedAt: lead.submittedAt,
    _subject: `Quote request from ${lead.page}`,
  }
}

export async function postForm(body: object): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error("Form submission failed")
  }
}

export async function submitLead(input: LeadInput): Promise<LeadPayload> {
  const lead = createLeadPayload(input)
  // TODO(back-office): POST `lead` (the LeadPayload) to the Halo back-office
  // API instead of Formspree. Keep the payload shape above. Do not send the
  // flattened Formspree body, and do not add a new paid service here.
  await postForm(leadSubmissionBody(lead))
  return lead
}
