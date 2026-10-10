/**
 * Single source of truth for site-wide SEO and business facts.
 *
 * Anything that appears in a title, a meta description, a canonical URL or
 * JSON-LD comes from here. The point is that the NAP (name, address, phone)
 * exists in exactly one place: an integrator's local search ranking depends
 * on those three strings being identical everywhere they appear, and this
 * repo previously carried two different addresses in two components.
 */

export const SITE_URL = "https://halointegration.com"

export const BUSINESS = {
  name: "Halo Integration",
  legalName: "Halo Integration",
  tagline: "Low Voltage and Digital Infrastructure Contractor",
  phone: "+1-254-425-6669",
  phoneDisplay: "(254) HALO-NOW",
  email: "info@halointegration.com",
  street: "25140 Kingsland Blvd, STE #103",
  city: "Katy",
  region: "TX",
  regionName: "Texas",
  postalCode: "77494",
  country: "US",
  // Headquarters coordinates, Kingsland Blvd at Grand Parkway.
  latitude: 29.7789,
  longitude: -95.8271,
  youtube: "https://www.youtube.com/@halo_integration",
} as const

/**
 * National contractor headquartered in Katy, Texas. The HQ address still
 * carries real weight for searches near Houston, so it stays in the schema,
 * but `areaServed` is the whole country rather than one metro.
 */
export const SERVICE_AREA = "United States"

/** Audience pages, which sit above the service pages and link down into them. */
export const SEGMENTS = [
  { slug: "multi-family", name: "Multi-Family" },
  { slug: "hospitality", name: "Hospitality" },
  { slug: "enterprise", name: "Enterprise" },
] as const

/** Absolute URL for a path. Canonicals and JSON-LD need absolute URLs. */
export function absoluteUrl(path = "/"): string {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`
  return `${SITE_URL}${clean}`
}
