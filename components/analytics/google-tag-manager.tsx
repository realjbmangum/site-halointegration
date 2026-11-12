import { GTM_CONTAINER_ID } from "@/lib/analytics"

/**
 * Google Tag Manager, container GTM-N4X6L3H8.
 *
 * This is the only Google tag on the site. Do not add a separate gtag.js
 * snippet or a Google Ads tag in the page. Google Ads conversions are set
 * up inside this container, listening for the dataLayer event
 * `generate_lead`.
 *
 * Landing forms push that event only after Formspree accepts the lead.
 * `page` is the landing path ("/cameras" or "/structuredcabling") and
 * `campaign` is the slug ("cameras" or "structured-cabling"). No form
 * fields are included.
 *
 * Plain script tags, same reason as AdPixels: on a static export,
 * next/script does not leave an executable tag in the prerendered HTML.
 * The head snippet is the standard GTM loader. The noscript iframe is
 * rendered as the first child of body.
 */
export function GoogleTagManagerHead() {
  return (
    <script
      id="google-tag-manager"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`,
      }}
    />
  )
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
