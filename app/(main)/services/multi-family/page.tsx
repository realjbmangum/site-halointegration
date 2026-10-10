import { getAudience } from "@/lib/audiences"
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { AudienceDetail } from "@/components/audiences/audience-detail"

const audience = getAudience("multi-family")

export const metadata = pageMetadata({
  title: audience.title,
  description: audience.description,
  path: `/services/${audience.slug}`,
})

export default function MultiFamilyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: audience.name, path: `/services/${audience.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(audience.faqs)} />
      <AudienceDetail audience={audience} />
    </>
  )
}
