import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { AboutPageClient } from "./page-client"

export const metadata = pageMetadata({
  title: "About Our Low Voltage Contracting Team",
  description:
    "Halo Integration designs and installs structured cabling, Wi-Fi, surveillance and access control for multi-family, hospitality and enterprise properties across the United States.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <AboutPageClient />
    </>
  )
}
