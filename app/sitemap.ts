import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AUDIENCES } from "@/lib/audiences"

/**
 * Generated sitemap.
 *
 * Replaces the hand-maintained public/sitemap.xml, which had drifted to 9
 * entries against 12 live pages and was missing /projects/ and /videos/.
 * The service pages are derived from the same constant the pages are built
 * from, so that half cannot drift. The core route list below is still
 * hand-maintained and does need updating when a top-level page is added.
 */
// Required by `output: "export"`: the sitemap is generated once at build time
// rather than served dynamically.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  // Content date, not build time: stamping every URL with the build
  // timestamp on each deploy is a date search engines learn to ignore.
  const lastModified = new Date("2026-10-09")
  // Campaign pages are indexable. The site does not noindex marketing
  // pages, and robots.txt allows /. /thank-you is left out: it is a
  // post-submit confirmation, and nothing else on the site links to it.
  // These two are listed by hand. This generator does not discover routes.
  const landingDate = new Date("2026-11-12")

  const core = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/videos", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  ]

  return [
    ...core.map((r) => ({
      url: absoluteUrl(r.path),
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    // The seven service pages: the ones intended to rank for service terms.
    ...SERVICES.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    // The three audience pages. They route into the service pages above.
    ...AUDIENCES.map((a) => ({
      url: absoluteUrl(`/services/${a.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Lower priority than the service pages, which are the URLs meant to rank.
    ...[
      { path: "/cameras", priority: 0.4 },
      { path: "/structuredcabling", priority: 0.4 },
    ].map((r) => ({
      url: absoluteUrl(r.path),
      lastModified: landingDate,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
  ]
}
