import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMetadata({
  title: "Hotel & Hospitality Technology",
  description:
    "Guest and back-of-house technology for hotels and resorts: guest Wi-Fi, structured cabling, video surveillance, access control and in-room technology, installed and certified.",
  path: "/services/hospitality",
  noindex: true,
  image: "/services/digital-infrastructure.jpg",
})

export default function HospitalityPage() {
  const benefits = [
    "Enhanced guest experiences and satisfaction scores",
    "Streamlined operations and staff efficiency",
    "Increased revenue through optimized systems",
    "Seamless integration across all property systems",
    "Real-time insights and analytics",
  ]

  const services = [
    {
      title: "PMS Integration",
      description: "Seamless integration with leading property management systems for unified operations.",
    },
    {
      title: "Guest Experience Platforms",
      description: "Digital solutions that personalize and enhance every touchpoint of the guest journey.",
    },
    {
      title: "Smart Room Technology",
      description: "IoT-enabled room controls for comfort, convenience, and energy efficiency.",
    },
    {
      title: "Revenue Management",
      description: "Advanced systems to optimize pricing, inventory, and revenue performance.",
    },
  ]

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: "Hospitality", path: "/services/hospitality" },
        ])}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Hospitality Technology
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Innovative technology solutions that elevate guest experiences and optimize hospitality operations.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Explore Solutions
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="/professional-technology-team-working-on-infrastruc.jpg" alt="Technology team working on network infrastructure" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Hospitality Excellence</h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Hospitality Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Guest Experience</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let's discuss how technology can elevate your hospitality operations
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
