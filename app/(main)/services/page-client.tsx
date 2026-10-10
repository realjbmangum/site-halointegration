"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Network,
  Shield,
  Video,
  Wifi,
  Phone,
  Building2,
  Speaker,
  Check,
  ArrowRight,
  Cable,
  ClipboardCheck,
  Lightbulb,
  PenTool,
  Wrench,
  HeadphonesIcon,
} from "lucide-react"

const processSteps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Surveying & Field Validation",
    description: "We confirm real site conditions: MDF/IDF readiness, power/ground, pathways, cabling routes, and wireless constraints, so there are no surprises.",
    deliverables: ["Photos & annotated plans", "As-found route map", "Readiness checklist", "Preliminary BOM with risk mitigation"],
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Consulting",
    description: "We translate your goals into a practical plan that fits your budget and environment.",
    deliverables: ["Requirements documentation", "Carrier/demarc planning", "Security & segmentation guidance", "Phased cutover plan"],
  },
  {
    icon: PenTool,
    step: "03",
    title: "Design",
    description: "We create install-ready engineering that can be executed efficiently and correctly.",
    deliverables: ["Topology diagrams", "MDF/IDF build sheets", "Port maps & cable schedules", "Wireless AP plans & final BOM"],
  },
  {
    icon: Wrench,
    step: "04",
    title: "Implementation",
    description: "We build, test, and turn up networks with documented quality at every step.",
    deliverables: ["MDF/IDF buildouts", "Fiber/copper certification", "AP installs & device deployment", "Daily updates & as-builts"],
  },
  {
    icon: HeadphonesIcon,
    step: "05",
    title: "Partner Support",
    description: "We stay engaged after go-live to keep things stable and supportable.",
    deliverables: ["Structured troubleshooting", "Warranty coordination", "Complete closeout documentation", "Smooth handoff to operations"],
  },
]

const services = [
  {
    icon: Network,
    title: "Digital Infrastructure / Structured Cabling",
    slug: "structured-cabling",
    image: "/services/digital-infrastructure.jpg",
    description:
      "Digital infrastructure and low-voltage technology solutions delivering tangible ROI and enhanced operational performance. We streamline processes, optimize resource allocation, and enhance connectivity.",
    features: [
      "Cat6/Cat6A cabling",
      "Fiber optic installation",
      "Network rack buildouts",
      "Cable management systems",
    ],
  },
  {
    icon: Wifi,
    title: "Network & Wi-Fi Solutions",
    slug: "network-wifi",
    image: "/services/wifi.jpg",
    description:
      "Enterprise-grade networking and wireless solutions designed for optimal coverage and performance. From site surveys to implementation, we deliver reliable connectivity that scales with your business.",
    features: [
      "Wi-Fi site surveys",
      "Network design & deployment",
      "Wireless access point installation",
      "Network performance optimization",
    ],
  },
  {
    icon: Video,
    title: "Smart Video Surveillance",
    slug: "video-surveillance",
    image: "/services/surveillance.jpg",
    description:
      "Harness AI-powered cloud video platforms to revolutionize your surveillance system. Scalable solutions that provide actionable insights and streamline compliance reporting.",
    features: [
      "Cloud-based VMS",
      "AI-powered analytics",
      "Multi-site management",
      "Existing camera integration",
    ],
  },
  {
    icon: Shield,
    title: "Access Control",
    slug: "access-control",
    image: "/services/access-control.jpg",
    description:
      "Cloud-based access control platforms for multi-family, hospitality, and enterprise buildings. Mobile credentials, occupancy monitoring, and seamless integration with your existing systems.",
    features: [
      "Mobile credentials",
      "Self-guided tours",
      "Occupancy monitoring",
      "Identity management integration",
    ],
  },
  {
    icon: Building2,
    title: "Prop-Tech Consulting",
    slug: "prop-tech-consulting",
    image: "/services/prop-tech.jpg",
    description:
      "Your trusted resource in property technology. We advise on leveraging technology to optimize property management, investment analysis, tenant experience, and sustainability.",
    features: [
      "Technology roadmapping",
      "Vendor selection",
      "ROI analysis",
      "Implementation oversight",
    ],
  },
  {
    icon: Speaker,
    title: "Audio & Video Solutions",
    slug: "audio-video",
    image: "/services/av.jpg",
    description:
      "Top-tier audiovisual solutions crafted by our in-house design team. We transform concepts into reality using state-of-the-art technology from industry-leading partners.",
    features: [
      "Conference room systems",
      "Distributed audio",
      "Video walls",
      "Control systems",
    ],
  },
  {
    icon: Phone,
    title: "VoIP Phone Services",
    slug: "voip-phone-systems",
    image: "/services/voip.jpg",
    description:
      "Cloud-based phone systems with 99.99% SLA and 24/7 support. Innovative, cost-effective, and feature-rich VoIP designed for easy deployment and simple scalability.",
    features: [
      "99.99% uptime SLA",
      "Call recording",
      "Auto attendant",
      "Voicemail to email",
    ],
  },
]

const industries = [
  {
    title: "Multi-Family",
    slug: "multi-family",
    description:
      "Built-to-scale infrastructure and integrated technology systems that enhance resident experience, streamline operations, and protect long-term asset value.",
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    description:
      "Future-ready infrastructure and guest-facing technology solutions designed to optimize operations, elevate the guest journey, and support brand standards.",
  },
  {
    title: "Enterprise",
    slug: "enterprise",
    description:
      "Secure, scalable infrastructure and integrated systems that support mission-critical operations, compliance, and long-term performance.",
  },
]

export function ServicesPageClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-[#030014]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,213,0.15),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,213,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,213,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[Cable, Shield, Video, Wifi].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Icon className="w-12 h-12 text-[#00ffd5]/20" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              End-to-End{" "}
              <span className="bg-gradient-to-r from-[#00ffd5] to-[#a855f7] bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Integrated infrastructure and technology systems delivered with precision and accountability
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Solutions for Every Sector
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Linked: these cards are the route into the audience pages,
                    which in turn route into the seven service pages. */}
                <Link
                  href={`/services/${industry.slug}`}
                  className="group block h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ffd5] transition-colors flex items-center justify-between gap-3">
                    {industry.title}
                    <ArrowRight
                      className="w-5 h-5 flex-none text-white/30 group-hover:text-[#00ffd5] transition-colors"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="text-white/70 leading-relaxed">{industry.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-[#030014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              From Survey to{" "}
              <span className="bg-gradient-to-r from-[#00ffd5] to-[#a855f7] bg-clip-text text-transparent">
                Support
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our proven 5-step methodology ensures your networking and infrastructure project is delivered on time, on budget, and built to last.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-500"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#00ffd5] to-[#a855f7] flex items-center justify-center">
                    <span className="text-sm font-bold text-[#030014]">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-[#00ffd5]/10 inline-flex mb-4 group-hover:bg-[#00ffd5]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#00ffd5]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00ffd5] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-[#00ffd5] mt-1 flex-shrink-0" />
                        <span className="text-xs text-white/40">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Connector line (except last) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-[#00ffd5]/50 to-transparent" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#00ffd5]/20 to-[#a855f7]/20 border border-[#00ffd5]/20">
                        <Icon className="w-8 h-8 text-[#00ffd5]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h3>
                    </div>

                    <p className="text-lg text-white/80 leading-relaxed mb-8">{service.description}</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#00ffd5]/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#00ffd5]" />
                          </div>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 mt-8 text-[#00ffd5] font-medium hover:gap-3 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
                    >
                      More on {service.title}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/40 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(0,255,213,0.1),transparent)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="text-gradient">Infrastructure</span>?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Let's discuss how our comprehensive services can enhance your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,213,0.4)] transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
