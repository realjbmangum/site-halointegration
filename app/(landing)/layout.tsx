import { LandingHeader } from "@/components/landing/landing-header"
import { FooterRedesign } from "@/components/redesign/layout/footer"

/**
 * Campaign pages use a trimmed header (logo and phone) and the live footer.
 * They are not wrapped by the main layout, so they are not added to the
 * primary nav.
 */
export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="antialiased bg-[#030014] text-white min-h-screen">
      <LandingHeader />
      {children}
      <FooterRedesign />
    </div>
  )
}
