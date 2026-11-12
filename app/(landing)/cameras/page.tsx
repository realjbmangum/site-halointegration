import Link from "next/link"
import Image from "next/image"
import { Check, ChevronDown } from "lucide-react"
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { BUSINESS } from "@/lib/site"
import { PlaceholderNote } from "@/components/landing/placeholder-note"
import { QuoteForm } from "@/components/landing/quote-form"

export const metadata = pageMetadata({
  title: "Security Cameras in Houston",
  description:
    "Free on-site walkthrough and a written fixed-price quote in 48 hours for security cameras at Houston area businesses.",
  path: "/cameras",
})

const bullets = [
  "See your business from your phone, live or recorded",
  "Know who comes and goes, day or night, with clear recorded video",
  "One local Houston team from design to install",
  "We also upgrade existing systems",
]

const steps = [
  "Free walkthrough.",
  "Fixed-price quote in 48 hours.",
  "Install by licensed technicians.",
]

// Draft answers that restate facts already published on /services/video-surveillance.
// Anything Halo has not published (brands, prices, install timelines, ownership)
// is a visible placeholder and is left out of the FAQ schema.
const faqs: { q: string; a: string; placeholder: boolean }[] = [
  {
    q: "How fast can you install?",
    // TODO(client): publish a typical install window. Do not invent a number of days.
    a: "A standard install timeline has not been published for this page. The walkthrough and the written quote are what confirm timing for a site.",
    placeholder: true,
  },
  {
    q: "Do I own the system?",
    // TODO(client): confirm hardware ownership and how platform licenses are billed after handover.
    // The service page says the system runs under the customer's account. It does not say who owns the cameras.
    a: "Whether you own the cameras and recording hardware, and how licenses are billed after handover, has not been confirmed for this page. The surveillance service page says the system is handed over to run under your account rather than ours. It does not state hardware ownership.",
    placeholder: true,
  },
  {
    q: "Where is footage stored?",
    // TODO(client): confirm this is always cloud storage. Update the answer if a local recorder is also offered.
    a: "Footage is stored on a cloud video platform. How long it is kept is set during design, to the policy the property or its insurer requires. The written quote names that retention term.",
    placeholder: false,
  },
  {
    q: "Which brands do you use?",
    // TODO(client): name the camera and platform brands if they should appear on this ad page.
    // Do not add a brand that is not already published. The partner marquee does not list camera brands.
    a: "Specific camera brands are not listed here yet. The surveillance service page says Halo works with cloud-managed video platforms rather than a single product line, and that the platform follows the retention, analytics, and multi-site requirements. Ask which platforms are currently carried.",
    placeholder: true,
  },
  {
    q: "Can you service my existing system?",
    a: "Yes. We upgrade existing systems. Where cameras already on the property are still serviceable, we bring them onto the new platform instead of replacing them. The walkthrough is how we tell which applies.",
    placeholder: false,
  },
  {
    q: "What does the cloud plan cost after the free months?",
    // TODO(client): publish the monthly cloud plan price after the free period. Do not put a number here before then.
    a: "The monthly cloud plan price after the free months has not been published. The written quote is where that price will be stated.",
    placeholder: true,
  },
]

const tel = `tel:${BUSINESS.phone.replace(/-/g, "")}`

export default function CamerasLandingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Security Cameras", path: "/cameras" }])} />
      <JsonLd
        data={faqSchema(faqs.filter((item) => !item.placeholder).map(({ q, a }) => ({ q, a })))}
      />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,213,0.12),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-28 sm:pt-32 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
                Houston area businesses
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Security Cameras for Houston Area Businesses. Installed Right. Priced Up Front.
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Free on-site walkthrough. Written fixed-price quote in 48 hours.
              </p>

              {/*
                TODO(client): the offer is not chosen. Keep both options in the
                sentence until Halo picks "3 months of cloud storage free" or
                "1 camera free". Replace the terms link once a terms URL exists.
              */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 text-left sm:text-center mb-8">
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  Approve your quote within 7 days and get 3 months of cloud storage free OR 1 camera
                  free. New systems only.{" "}
                  <a
                    href="#offer-terms"
                    className="text-[#00ffd5] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm"
                  >
                    Offer terms
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center min-h-12 px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5]"
                >
                  Get My Quote
                </a>
                <a
                  href={tel}
                  className="inline-flex items-center justify-center min-h-12 px-8 py-4 rounded-full border border-white/15 bg-white/5 text-white font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5]"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
              {/* TODO(client): replace this block with the published offer terms. */}
              <div id="offer-terms" className="mt-4 scroll-mt-28 text-left max-w-3xl mx-auto">
                <PlaceholderNote title="Placeholder: offer terms">
                  <p>
                    Offer terms are not written yet. This link stays on the page until Halo publishes
                    them and chooses which offer applies.
                  </p>
                </PlaceholderNote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What you get</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00ffd5]/10">
                    <Check className="h-4 w-4 text-[#00ffd5]" aria-hidden="true" />
                  </span>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#0a0a0f] p-6 sm:p-8 text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#00ffd5] mb-3">Price</h2>
              {/* TODO(client): a package price is still being built. This range is the interim anchor. */}
              <p className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                Most small business systems run from $2,000 to $5,000.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">How it works</h2>
            <ol className="grid md:grid-cols-3 gap-4">
              {steps.map((step, index) => (
                <li key={step} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#00ffd5] font-semibold mb-4">
                    {index + 1}
                  </span>
                  <p className="text-lg text-white leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="quote" className="scroll-mt-28 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <QuoteForm
                page="/cameras"
                campaign="cameras"
                heading="Get a fixed-price quote"
                needOptions={[
                  { value: "New cameras", label: "New cameras" },
                  { value: "Repair or upgrade", label: "Repair or upgrade" },
                  { value: "Not sure", label: "Not sure" },
                ]}
                extraFields={[
                  {
                    name: "numberOfLocations",
                    label: "Number of locations",
                    kind: "select",
                    options: [
                      { value: "1", label: "1" },
                      { value: "2 to 5", label: "2 to 5" },
                      { value: "6 or more", label: "6 or more" },
                    ],
                  },
                  {
                    name: "cameraCount",
                    label: "Rough number of cameras",
                    kind: "text",
                    inputMode: "numeric",
                    placeholder: "For example, 8",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20 border-t border-white/5 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">Proof</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto text-center">
              Install photos and customer quotes are not on this page yet. Nothing below is a
              testimonial.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <PlaceholderNote title="Placeholder: real install photo">
                <p>Add a photo from a finished camera install. Do not use a stock image here.</p>
              </PlaceholderNote>
              <PlaceholderNote title="Placeholder: real install photo">
                <p>Add a second install photo, if one is available.</p>
              </PlaceholderNote>
              <PlaceholderNote title="Placeholder: customer quote">
                <p>Add one real customer quote. Do not invent a testimonial.</p>
              </PlaceholderNote>
              <PlaceholderNote title="Placeholder: customer quote">
                <p>Add a second quote only if a real one exists. One is enough.</p>
              </PlaceholderNote>
              <div className="sm:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-6 flex flex-col sm:flex-row sm:items-center gap-6">
                <Image
                  src="/halo-logo.png"
                  alt="Halo Integration logo"
                  width={180}
                  height={180}
                  className="h-16 w-auto"
                />
                <p className="text-white/70 leading-relaxed">
                  Halo logo. This is the live mark. The photos and quotes in this section are still
                  placeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Questions</h2>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-[#00ffd5] transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="pt-4 text-white/75 leading-relaxed">
                    {item.placeholder ? (
                      <PlaceholderNote title="Placeholder answer">
                        <p>{item.a}</p>
                      </PlaceholderNote>
                    ) : (
                      <p>{item.a}</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/50 text-center">
              More on the service itself is on{" "}
              <Link
                href="/services/video-surveillance"
                className="text-[#00ffd5] underline underline-offset-4"
              >
                video surveillance
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
