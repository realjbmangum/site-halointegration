import { Check } from "lucide-react"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { BUSINESS } from "@/lib/site"
import { QuoteForm } from "@/components/landing/quote-form"

export const metadata = pageMetadata({
  title: "Network Cabling in Houston",
  description:
    "Free Houston site survey and a written quote in 48 hours for network cabling and low voltage wiring. Licensed and insured.",
  path: "/structuredcabling",
})

/*
  Alt headline, not shown:
  Your Next Build-Out Starts With the Cabling. Get It Done Right the First Time.
*/

const bullets = [
  "Clean, labeled cabling for hotels, hospitals, multifamily, offices, shops, and warehouses",
  "Built for new build-outs, moves, and expansions",
  "One local team for cabling and cameras",
]

const facts = ["Free Houston site survey", "Written quote in 48 hours", "Licensed and insured"]

const tel = `tel:${BUSINESS.phone.replace(/-/g, "")}`

export default function StructuredCablingLandingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Network Cabling", path: "/structuredcabling" }])}
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
                Network Cabling for Houston Area Businesses. Clean, Labeled, Done Right.
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Free Houston site survey. Written quote in 48 hours. Licensed and insured.
              </p>
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
            <ul className="grid md:grid-cols-3 gap-4 mb-10">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-white font-medium leading-relaxed"
                >
                  {fact}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What you get</h2>
            <ul className="grid gap-4 max-w-3xl mx-auto">
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

        <section id="quote" className="scroll-mt-28 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <QuoteForm
                page="/structuredcabling"
                campaign="structured-cabling"
                heading="Get a written quote"
                needOptions={[
                  { value: "Network cabling", label: "Network cabling" },
                  { value: "Low voltage wiring", label: "Low voltage wiring" },
                  { value: "New build-out", label: "New build-out" },
                  { value: "Not sure", label: "Not sure" },
                ]}
                extraFields={[
                  {
                    name: "squareFootageOrDrops",
                    label: "Square footage or number of drops",
                    kind: "text",
                  },
                  {
                    name: "timeline",
                    label: "Timeline",
                    kind: "text",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
