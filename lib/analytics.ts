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

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    lintrk?: (action: string, data?: Record<string, unknown>) => void
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
