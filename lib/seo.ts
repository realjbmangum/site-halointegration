import type { Metadata } from "next"
import { SITE_URL, BUSINESS, SERVICE_AREA, absoluteUrl } from "./site"

const OG_IMAGE = "/og-default.jpg"

/**
 * Builds a page's Metadata with a canonical URL and resolved Open Graph tags.
 *
 * Every page must call this. Pages that do not get one inherit the root
 * layout's metadata, which is how six pages on this site ended up serving an
 * identical title and description to each other.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  noindex = false,
}: {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
}): Metadata {
  const url = absoluteUrl(path)
  const fullTitle = title.includes("Halo Integration") ? title : `${title} | Halo Integration`

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      locale: "en_US",
      // Dimensions are only declared for the default card, which really is
      // 1200x630. Service pages pass their own images at other sizes, and a
      // wrong declared size is worse than none.
      images: [
        image === OG_IMAGE
          ? { url: image, width: 1200, height: 630, alt: `${BUSINESS.name}: ${title}` }
          : { url: image, alt: `${BUSINESS.name}: ${title}` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    // noindex but still follow: these pages link to /contact and the real
    // service pages, and nofollow would stop that equity flowing.
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

/** Postal address, shared by every schema node that needs one. */
const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.country,
}

/**
 * Organization plus LocalBusiness for the whole site, emitted once in the
 * root layout. The HQ address stays in the graph because it is a real
 * ranking signal near Houston, while `areaServed` is national.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/halo-logo.png`,
        },
        description:
          "Halo Integration is a low voltage and digital infrastructure contractor serving multi-family, hospitality and enterprise properties nationwide.",
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        address: postalAddress,
        sameAs: [BUSINESS.youtube],
      },
      {
        "@type": ["LocalBusiness", "ElectricalContractor"],
        "@id": `${SITE_URL}/#localbusiness`,
        name: BUSINESS.name,
        url: SITE_URL,
        image: `${SITE_URL}/og-default.jpg`,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.latitude,
          longitude: BUSINESS.longitude,
        },
        areaServed: { "@type": "Country", name: SERVICE_AREA },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  }
}

/** Service schema for an individual service page. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType: name,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: SERVICE_AREA },
  }
}

/** FAQPage schema. Only emit this where the questions are visible on the page. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

/** Breadcrumbs. Pass the trail excluding Home, which is added here. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
