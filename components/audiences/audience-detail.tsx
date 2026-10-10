import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import type { AudienceContent } from "@/lib/audiences"
import { getService } from "@/lib/services"
import { projectsByCategory } from "@/lib/projects"

/** Two rows of three on desktop. The rest are on /projects/. */
const PROJECTS_SHOWN = 6

/**
 * Shared template for the three audience pages.
 *
 * Server component, no framer-motion: these pages exist to be read by search
 * engines and to route a visitor into a service page, so the content has to
 * be in the prerendered HTML.
 *
 * The page deliberately does not restate what each service is. It links to
 * the service page that already does.
 */
export function AudienceDetail({ audience }: { audience: AudienceContent }) {
  // Throw rather than filter: a typo in an audience's `services` array
  // would otherwise drop a card silently and nothing would catch it.
  const services = audience.services.map((slug) => {
    const service = getService(slug)
    if (!service) {
      throw new Error(`Audience "${audience.slug}" references unknown service slug "${slug}"`)
    }
    return service
  })
  const projects = projectsByCategory(audience.projectCategory)
  const shown = projects.slice(0, PROJECTS_SHOWN)

  return (
    <main className="bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.15]" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                {audience.name}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              {audience.h1}
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">{audience.lede}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0a0a0f] font-semibold hover:bg-white/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
            >
              Discuss a project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro, with the client's own description of the vertical */}
      <section className="py-16 sm:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <p className="text-lg text-white/80 leading-relaxed border-l-2 border-[#00ffd5] pl-5">
              {audience.summary}
            </p>
            <div className="lg:col-span-2 space-y-6">
              {audience.intro.map((para, i) => (
                <p key={i} className="text-lg text-white/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What matters on this kind of property */}
      <section className="py-16 sm:py-20 bg-[#12121a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
            What matters on these projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {audience.priorities.map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route into the service pages. This is the page's main job. */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Services we deliver for <span className="text-gradient">{audience.name}</span>
          </h2>
          <p className="text-white/50 mb-10 max-w-2xl">
            Each links through to what it covers, what you receive at handover, and the
            questions that come up most on that scope.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="glass-card rounded-xl p-6 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
              >
                <h3 className="text-white font-semibold mb-2 flex items-center justify-between gap-2">
                  {service.name}
                  <ArrowRight
                    className="w-4 h-4 flex-none text-white/40 group-hover:text-[#00ffd5] transition-colors"
                    aria-hidden="true"
                  />
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{service.lede}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Completed work in this category. Omitted entirely when there is none,
          rather than showing an empty shelf. */}
      {projects.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#12121a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {audience.name} projects
                </h2>
                <p className="text-white/55 mt-2">
                  {shown.length === projects.length
                    ? `${projects.length} completed ${audience.name.toLowerCase()} properties.`
                    : `${shown.length} of ${projects.length} completed ${audience.name.toLowerCase()} properties.`}
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#00ffd5] font-medium hover:gap-3 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
              >
                See all projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((project) => (
                <article key={project.id} className="glass-card rounded-xl overflow-hidden">
                  {project.image && (
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={[
                          project.title,
                          project.location,
                          `${project.category.toLowerCase()} technology infrastructure project`,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-white font-semibold leading-snug">{project.title}</h3>
                    <p className="text-xs text-white/60 mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                      {project.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" aria-hidden="true" />
                          {project.location}
                        </span>
                      )}
                      <span>{project.units}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
            Common questions
          </h2>
          <dl className="max-w-3xl divide-y divide-white/5">
            {audience.faqs.map((faq) => (
              <div key={faq.q} className="py-6 first:pt-0">
                <dt className="text-lg font-semibold text-white mb-2 leading-snug">{faq.q}</dt>
                <dd className="text-white/65 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[#12121a] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Planning {audience.article} {audience.name.toLowerCase()} project?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Send the property details and the scope. We will come back with what the survey needs to
            confirm and what it will take to deliver.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0a0a0f] font-semibold hover:bg-white/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
          >
            Contact Halo Integration
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
