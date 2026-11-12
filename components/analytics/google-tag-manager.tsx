import { GTM_CONTAINER_ID } from "@/lib/analytics"

/**
 * Google Tag Manager, container GTM-N4X6L3H8.
 *
 * Plain script tags, same reason as AdPixels: on a static export,
 * next/script does not leave an executable tag in the prerendered HTML.
 * The head snippet is the standard GTM loader. The noscript iframe is
 * rendered as the first child of body.
 *
 * TODO(client): Google Ads tag AW-16525098356 is NOT installed.
 *
 * The snippet that was sent pointed this ID at the gtm.js URL
 * (https://www.googletagmanager.com/gtm.js?id=AW-16525098356). That URL is
 * the Tag Manager loader. An Ads tag loads gtag.js
 * (https://www.googletagmanager.com/gtag/js?id=AW-16525098356) and calls
 * gtag('config', 'AW-16525098356'), or it is added as a tag inside
 * container GTM-N4X6L3H8. Do not paste the AW id into gtm.js.
 *
 * When the client confirms a real snippet, put it here, after the GTM
 * loader, OR only inside the container. Not both. Wire the conversion to
 * the dataLayer event `generate_lead`. Landing forms push that event only
 * after Formspree accepts the lead. The event's `page` property is the
 * landing path ("/cameras" or "/structuredcabling") and `campaign` is the
 * slug ("cameras" or "structured-cabling").
 *
 * Shape only. This is not rendered:
 *
 *   <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16525098356"></script>
 *   <script>
 *     window.dataLayer = window.dataLayer || [];
 *     function gtag(){dataLayer.push(arguments);}
 *     gtag('js', new Date());
 *     gtag('config', 'AW-16525098356');
 *   </script>
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
