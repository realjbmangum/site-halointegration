import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SERVICES, getService } from "@/lib/services"
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceDetail } from "@/components/services/service-detail"

/**
 * The seven real service pages.
 *
 * A dynamic segment rather than seven near-identical directories. The five
 * pre-existing audience routes under /services/ (multi-family, hospitality,
 * enterprise, digital-solutions, infrastructure-consulting) are static
 * segments, and static segments take precedence over this one, so they are
 * unaffected.
 */
// Only the slugs below exist. Without this, `next dev` errors on an
// unknown slug instead of returning the 404 the export produces.
export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) return {}

  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.schemaName,
          description: service.description,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServiceDetail service={service} />
    </>
  )
}
