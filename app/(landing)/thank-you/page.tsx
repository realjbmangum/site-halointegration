import Link from "next/link"
import { Phone } from "lucide-react"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { BUSINESS } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Quote Request Received",
  description:
    "We received your quote request. Halo Integration will call you the next business day.",
  path: "/thank-you",
})

const tel = `tel:${BUSINESS.phone.replace(/-/g, "")}`

export default function ThankYouPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Thank you", path: "/thank-you" }])} />
      <main className="pt-28 sm:pt-32 pb-24 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#0a0a0f] p-8 sm:p-12 text-center">
            <p className="text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Quote request received
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Thanks. We have your request.
            </h1>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-8">
              We&apos;ll call you the next business day.
            </p>
            <a
              href={tel}
              className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5]"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <p className="mt-8">
              <Link
                href="/"
                className="text-sm text-white/60 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm"
              >
                Back to Halo Integration
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
