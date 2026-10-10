import { HeroRedesign } from "@/components/redesign/home/hero-section"
import { IntroductionRedesign } from "@/components/redesign/home/introduction"
import { ValuePropositionsRedesign } from "@/components/redesign/home/value-propositions"
import { BentoServicesRedesign } from "@/components/redesign/home/bento-services"
import { ApproachSectionRedesign } from "@/components/redesign/home/approach-section"
import { PartnerMarqueeRedesign } from "@/components/redesign/home/partner-marquee"
import { AboutPreviewRedesign } from "@/components/redesign/home/about-preview"
import { CTASectionRedesign } from "@/components/redesign/home/cta-section"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Structured Cabling, Wi-Fi & Security",
  description:
    "Low voltage and digital infrastructure contractor for multi-family, hospitality and enterprise properties nationwide. Structured cabling, Wi-Fi, surveillance, access control and VoIP.",
  path: "/",
})

export default function HomePage() {
  return (
    <main>
      <HeroRedesign />
      <IntroductionRedesign />
      <ValuePropositionsRedesign />
      <BentoServicesRedesign />
      <ApproachSectionRedesign />
      <PartnerMarqueeRedesign />
      <AboutPreviewRedesign />
      <CTASectionRedesign />
    </main>
  )
}
