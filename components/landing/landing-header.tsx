import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { BUSINESS } from "@/lib/site"

const tel = `tel:${BUSINESS.phone.replace(/-/g, "")}`

/**
 * Trimmed campaign header. Same logo, glass, and type as the site nav, with
 * the phone in place of the section links. Campaign URLs stay out of that
 * nav. The logo still goes home, matching the live header.
 */
export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          <Link href="/" className="relative shrink-0 group">
            <span className="absolute -inset-4 bg-[#00ffd5]/0 group-hover:bg-[#00ffd5]/10 blur-xl transition-all duration-500 rounded-full" />
            <Image
              src="/MASTER LOGO_ALT_WHT_V2.png"
              alt="Halo Integration"
              width={500}
              height={500}
              className="relative h-12 sm:h-14 w-auto"
              priority
            />
          </Link>
          <a
            href={tel}
            className="inline-flex items-center justify-center gap-2 min-h-11 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5]"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
