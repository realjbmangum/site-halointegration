import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { VideosPageClient } from "./page-client"

export const metadata = pageMetadata({
  title: "Project Videos & Site Walkthroughs",
  description:
    "Watch Halo Integration crews on site: structured cabling buildouts, access point installs, surveillance deployments and finished property technology walkthroughs.",
  path: "/videos",
})

export default function VideosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Videos", path: "/videos" }])} />
      <VideosPageClient />
    </>
  )
}
