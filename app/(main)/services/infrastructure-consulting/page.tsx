import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMetadata({
  title: "Infrastructure Consulting & Design",
  description:
    "Infrastructure consulting for owners, developers and general contractors: site surveys, field validation, topology design, build sheets, cable schedules and cutover planning.",
  path: "/services/infrastructure-consulting",
  noindex: true,
  image: "/services/digital-infrastructure.jpg",
})

export default function InfrastructureConsultingPage() {
  const benefits = [
    "Reduced operational costs through optimized infrastructure",
    "Improved system reliability and uptime",
    "Scalable architecture that grows with your business",
    "Enhanced security and compliance",
    "Future-proof technology investments",
  ]

  const services = [
    {
      title: "Network Architecture & Design",
      description: "Comprehensive network planning and implementation for optimal performance and reliability.",
    },
    {
      title: "System Integration",
      description: "Seamless integration of disparate systems to create unified, efficient operations.",
    },
    {
      title: "Technology Roadmapping",
      description: "Strategic planning to align technology investments with business objectives.",
    },
    {
      title: "Infrastructure Audits",
      description: "Thorough assessment of existing infrastructure to identify optimization opportunities.",
    },
  ]

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: "Infrastructure Consulting", path: "/services/infrastructure-consulting" },
        ])}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Infrastructure Consulting
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Strategic technology infrastructure planning and implementation that transforms your operations and
                positions you for long-term success.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/services/digital-infrastructure.jpg"
                alt="Fiber optic patch panels terminated in a rack"
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Consulting Services</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Consulting Services</h2>
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
            <h2 className="text-3xl font-bold mb-6">Let's Build Your Infrastructure Strategy</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Schedule a consultation to discuss your infrastructure needs
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
