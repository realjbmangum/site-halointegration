import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMetadata({
  title: "Multi-Family Property Technology",
  description:
    "Technology infrastructure for apartment communities: structured cabling, property-wide Wi-Fi, access control, surveillance and smart apartment packages for new builds and retrofits.",
  path: "/services/multi-family",
  noindex: true,
  image: "/services/digital-infrastructure.jpg",
})

export default function MultiFamilyPage() {
  const benefits = [
    "Streamlined property operations and management",
    "Enhanced resident satisfaction and retention",
    "Reduced operational costs through automation",
    "Improved security and access control",
    "Data-driven insights for better decision making",
  ]

  const services = [
    {
      title: "Property Management Systems",
      description: "Comprehensive platforms to manage leasing, maintenance, and resident communications.",
    },
    {
      title: "Smart Building Technology",
      description: "IoT-enabled systems for energy management, security, and amenity control.",
    },
    {
      title: "Resident Portals",
      description: "Self-service platforms that empower residents and reduce administrative burden.",
    },
    {
      title: "Access Control Systems",
      description: "Modern, secure access solutions for buildings, amenities, and parking.",
    },
  ]

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: "Multi-Family", path: "/services/multi-family" },
        ])}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Multi-Family Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Comprehensive technology solutions that transform property operations and elevate the resident
                experience.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/modern-office-building-technology.jpg"
                alt="Aerial view of a modern glass office building with rooftop solar panels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Transform Your Properties</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Multi-Family Services</h2>
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
            <h2 className="text-3xl font-bold mb-6">Elevate Your Property Technology</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Discover how we can help modernize your properties
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
