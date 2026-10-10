import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import type { ServiceContent } from "@/lib/services"
import { AUDIENCES } from "@/lib/audiences"

/**
 * Presentational template shared by the seven service pages.
 *
 * Deliberately a server component with no framer-motion: these are the pages
 * meant to rank, so the content has to be in the prerendered HTML and the
 * page should not pay for an animation library to show a list of bullet
 * points. The existing dark brand classes come from app/brand.css.
 */
export function ServiceDetail({ service }: { service: ServiceContent }) {
  // Derived from AUDIENCES so the two lists cannot drift apart.
  const segmentNames = new Map<string, string>(AUDIENCES.map((a) => [a.slug, a.name]))

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
                {service.name}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                {service.h1}
              </h1>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">{service.lede}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0a0a0f] font-semibold hover:bg-white/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
              >
                Discuss a project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {service.intro.map((para, i) => (
              <p key={i} className="text-lg text-white/70 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-20 bg-[#12121a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            What <span className="text-gradient">{service.name}</span> includes
          </h2>
          <p className="text-white/50 mb-12 max-w-2xl">
            Scope varies by property. These are the elements this service is normally built from.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.includes.map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                What you receive
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Documentation is part of the deliverable, not an extra. A system nobody can
                troubleshoot after handover is an outage waiting for a date.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#00ffd5] font-medium hover:gap-3 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
              >
                See completed projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-1 flex-none w-5 h-5 rounded-full bg-[#00ffd5]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#00ffd5]" aria-hidden="true" />
                  </span>
                  <span className="text-white/75 leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who buys it */}
      <section className="py-16 sm:py-20 bg-[#12121a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
            Who we deliver this for
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {service.segments.map((slug) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="glass-card rounded-xl p-6 group hover:border-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
              >
                <span className="text-white font-semibold flex items-center justify-between gap-2">
                  {segmentNames.get(slug) ?? slug}
                  <ArrowRight
                    className="w-4 h-4 text-white/40 group-hover:text-[#00ffd5] transition-colors"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
            Common questions
          </h2>
          <dl className="max-w-3xl divide-y divide-white/5">
            {service.faqs.map((faq) => (
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
            Have a {service.name.toLowerCase()} scope to price?
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
