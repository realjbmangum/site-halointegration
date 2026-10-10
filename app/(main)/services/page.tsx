import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { ServicesPageClient } from "./page-client"

export const metadata = pageMetadata({
  title: "Low Voltage & Technology Services",
  description:
    "Structured cabling, commercial Wi-Fi, video surveillance, access control, VoIP, AV and prop-tech consulting. Surveyed, designed, installed and certified by one contractor.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <ServicesPageClient />
    </>
  )
}
