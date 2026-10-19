import { META_PIXEL_ID, LINKEDIN_PARTNER_ID } from "@/lib/analytics"

/**
 * Meta Pixel and LinkedIn Insight Tag.
 *
 * A server component emitting plain <script> tags, deliberately, not
 * next/script. On a static export next/script with the default
 * afterInteractive strategy renders nothing into the prerendered HTML and
 * then inserts the inline script through React after hydration, and a script
 * element inserted that way never executes. The result looked correct in the
 * DOM and in the page source, while fbq and lintrk stayed undefined and the
 * only tag that actually fired was the <noscript> image, meaning the pixel
 * worked for visitors with JavaScript disabled and nobody else.
 *
 * Rendered server-side, these land in the static HTML and the browser runs
 * them while parsing, which is what both vendors' own snippets assume.
 *
 * Both snippets are rewritten rather than pasted. The LinkedIn tag as
 * supplied had lost the quotes around its script URL, leaving
 * `b.src = https://snap.licdn.com/...`, which is a syntax error.
 *
 * Disclosed in /privacy, which went live before this did.
 */
export function AdPixels() {
  return (
    <>
      <script
        id="meta-pixel"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
        }}
      />
      <script
        id="linkedin-insight"
        dangerouslySetInnerHTML={{
          __html: `_linkedin_partner_id="${LINKEDIN_PARTNER_ID}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
        />
      </noscript>
    </>
  )
}
