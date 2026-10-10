import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMetadata({
  title: "Enterprise Technology Infrastructure",
  description:
    "Low voltage and network infrastructure for multi-site enterprises: campus cabling, switching, enterprise Wi-Fi, surveillance, access control and VoIP rolled out across locations.",
  path: "/services/enterprise",
  noindex: true,
  image: "/services/digital-infrastructure.jpg",
})

export default function EnterprisePage() {
  const benefits = [
    "Scalable architecture that supports growth",
    "Enhanced security and regulatory compliance",
    "Improved operational efficiency and cost savings",
    "Seamless cloud migration and modernization",
    "24/7 enterprise-grade support",
  ]

  const services = [
    {
      title: "Enterprise Architecture",
      description: "Comprehensive architecture design and planning for complex enterprise environments.",
    },
    {
      title: "Cloud Migration",
      description: "Strategic migration to cloud platforms with minimal disruption and maximum benefit.",
    },
    {
      title: "Data Center Solutions",
      description: "Modern data center design, implementation, and optimization services.",
    },
    {
      title: "Security & Compliance",
      description: "Robust security frameworks and compliance solutions for regulated industries.",
    },
  ]

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: "Enterprise", path: "/services/enterprise" },
        ])}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Enterprise Solutions</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Scalable, secure infrastructure solutions designed for the unique challenges of large organizations and
                enterprises.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Needs
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/modern-technology-infrastructure-consulting-team-c.jpg"
                alt="Technology consulting team reviewing infrastructure plans"
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Enterprise-Grade Benefits</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Enterprise Services</h2>
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
            <h2 className="text-3xl font-bold mb-6">Scale Your Enterprise Infrastructure</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Partner with us for enterprise-grade technology solutions
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
