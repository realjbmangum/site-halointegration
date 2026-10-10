import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { ContactPageClient } from "./page-client"

export const metadata = pageMetadata({
  title: "Contact Us | Request a Project Quote",
  description:
    "Talk to Halo Integration about a cabling, Wi-Fi, surveillance or access control scope. Call (254) HALO-NOW, email info@halointegration.com, or send project details for a quote.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <ContactPageClient />
    </>
  )
}
