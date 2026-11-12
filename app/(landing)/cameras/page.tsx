import { Check, ChevronDown } from "lucide-react"
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { BUSINESS } from "@/lib/site"
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

const faqs = [
  {
    q: "Where is footage stored?",
    a: "Footage is stored on a cloud video platform. How long it is kept is set during design, to the policy the property or its insurer requires. The written quote names that retention term.",
  },
  {
    q: "Can you service my existing system?",
    a: "Yes. We upgrade existing systems. Where cameras already on the property are still serviceable, we bring them onto the new platform instead of replacing them. The walkthrough is how we tell which applies.",
  },
]

const tel = `tel:${BUSINESS.phone.replace(/-/g, "")}`

export default function CamerasLandingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Security Cameras", path: "/cameras" }])} />
      <JsonLd data={faqSchema(faqs)} />
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
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 mb-8">
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  Approve your quote within 7 days and get 3 months of cloud storage free OR 1 camera
                  free. New systems only.
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
                  },
                ]}
              />
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
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
