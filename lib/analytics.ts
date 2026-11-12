/**
 * Advertising pixels for the campaign starting 19 October 2026.
 *
 * Both IDs are public by nature: they appear in the page source of every site
 * that runs them, so they are constants here rather than environment
 * variables. Nothing here is a secret.
 *
 * A note on the snippets these came from. The LinkedIn tag as supplied had
 * lost the quotes around its script URL somewhere between LinkedIn's UI and
 * the email, leaving `b.src = https://snap.licdn.com/...` which is a
 * JavaScript syntax error, not a working tag. Both are rewritten here rather
 * than pasted. If someone hands you a replacement snippet, run it past a
 * parser before trusting it.
 */

export const META_PIXEL_ID = "1625253125640269"
export const LINKEDIN_PARTNER_ID = "10192444"

/**
 * Public container id, same as the pixel ids above. It is not a secret.
 * The Google Ads id AW-16525098356 is intentionally absent. See the TODO
 * on GoogleTagManagerHead.
 */
export const GTM_CONTAINER_ID = "GTM-N4X6L3H8"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    lintrk?: (action: string, data?: Record<string, unknown>) => void
    dataLayer?: unknown[]
  }
}

/**
 * Fires when someone actually submits the contact form.
 *
 * This is the event that matters. Without it Meta knows how many people
 * landed on the site and nothing about how many enquired, which means its
 * optimisation cannot learn which clicks are worth buying.
 *
 * Wrapped in a try/catch because an ad blocker, a failed script load or a
 * privacy extension must never stop the form from completing. The submission
 * is the product; the tracking is not.
 */
export function trackLead(): void {
  try {
    window.fbq?.("track", "Lead")
  } catch {
    // Deliberately swallowed. See above.
  }
}

/**
 * Fires after a landing-page quote is accepted by Formspree, before the
 * browser moves to /thank-you. The navigation is client-side, so the page
 * does not unload out from under the tag.
 *
 * `generate_lead` is the event a GTM conversion tag should listen for.
 * `page` is the landing path. No form fields are included.
 *
 * Also counts a Meta Lead, matching the contact form. The Google Ads tag
 * is not installed yet. Do not add AW-16525098356 here.
 */
export function trackGenerateLead({ page, campaign }: { page: string; campaign: string }): void {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "generate_lead",
      page,
      campaign,
    })
  } catch {
    // Measurement must never block the thank-you page.
  }
  trackLead()
}
