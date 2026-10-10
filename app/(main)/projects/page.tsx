import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { ProjectsPageClient } from "./page-client"

export const metadata = pageMetadata({
  title: "Our Projects | Multi-Family & Hospitality",
  description:
    "Completed low voltage and digital infrastructure projects across apartment communities and hotels, with the property, location and scope delivered on each one.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Projects", path: "/projects" }])} />
      <ProjectsPageClient />
    </>
  )
}
