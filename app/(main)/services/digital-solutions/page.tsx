import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMetadata({
  title: "Digital Infrastructure Solutions",
  description:
    "Digital infrastructure design and delivery: structured cabling backbones, network buildouts, systems integration, and the as-built documentation needed to operate it after handover.",
  path: "/services/digital-solutions",
  noindex: true,
  image: "/services/digital-infrastructure.jpg",
})

export default function DigitalSolutionsPage() {
  const benefits = [
    "Custom solutions tailored to your unique requirements",
    "Modern, scalable architecture built for growth",
    "Seamless integration with existing systems",
    "Enhanced user experiences across all touchpoints",
    "Accelerated time-to-market for new capabilities",
  ]

  const services = [
    {
      title: "Custom Software Development",
      description: "Bespoke applications designed to solve your specific business challenges.",
    },
    {
      title: "IoT Integration",
      description: "Connect and manage smart devices to create intelligent, responsive environments.",
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that engage users and drive results.",
    },
    {
      title: "API Development",
      description: "Robust APIs that enable seamless data exchange and system integration.",
    },
  ]

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: "Digital Infrastructure", path: "/services/digital-solutions" },
        ])}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Digital Solutions</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transform your business with custom software and digital solutions that drive innovation and deliver
                exceptional user experiences.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/modern-technology-infrastructure-network-abstract-.jpg"
                alt="Abstract illustration of a network infrastructure topology"
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Digital Transformation Benefits</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What We Build</h2>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">Let's discuss your digital transformation goals</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
