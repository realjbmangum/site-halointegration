"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Building2, Hotel, Warehouse, MapPin } from "lucide-react"

// Project cards. Content supplied by the client.
const projects: {
  id: number
  title: string
  category: "Multi-Family" | "Hospitality" | "Enterprise"
  location: string
  units: string
  description: string
  image: string | null
}[] = [
  {
    id: 1,
    title: "300 E 36th – Avery Hall",
    category: "Multi-Family",
    location: "",
    units: "294 units",
    description:
      "High-performance network infrastructure deployment including fiber backbone, MDF/IDF buildouts, and full wireless coverage across a multi-story residential development.",
    image: "/projects/300-e-36th-avery-hall.jpg",
  },
  {
    id: 2,
    title: "Atria Cinco Ranch",
    category: "Multi-Family",
    location: "Cinco Ranch, TX",
    units: "78 units",
    description:
      "Full network infrastructure deployment including structured cabling, fiber distribution, and communications room buildout across a senior living community.",
    image: "/projects/atria-cinco-ranch.jpg",
  },
  {
    id: 3,
    title: "Atria Copeland",
    category: "Multi-Family",
    location: "Tyler, TX",
    units: "79 units",
    description:
      "Underground conduit and coax infrastructure installation connecting multiple buildings, delivering reliable property-wide connectivity.",
    image: "/projects/atria-copeland.jpg",
  },
  {
    id: 4,
    title: "Best Western Hotel Finial Premier",
    category: "Hospitality",
    location: "Anniston, AL",
    units: "61 rooms",
    description:
      "Structured cabling installation and certification across guest rooms and common areas, including MDF/IDF buildouts and fully tested network systems.",
    image: "/projects/best-western-finial-premier.jpg",
  },
  {
    id: 5,
    title: "Candlewood Suites",
    category: "Hospitality",
    location: "Huntsville, AL",
    units: "107 units",
    description:
      "Complete low-voltage infrastructure deployment for a new construction hotel, including structured cabling, CCTV systems, and full network integration.",
    image: "/projects/candlewood-suites-huntsville.jpg",
  },
  {
    id: 6,
    title: "Catalyst Tower",
    category: "Multi-Family",
    location: "Uptown Charlotte, NC",
    units: "462 units",
    description:
      "High-rise network infrastructure deployment including fiber backbone, riser systems, MDF/IDF buildouts, and fully certified structured cabling.",
    image: "/projects/catalyst-tower.jpg",
  },
  {
    id: 7,
    title: "Coast Seattle Downtown Hotel",
    category: "Hospitality",
    location: "Seattle, WA",
    units: "256 rooms",
    description:
      "Fiber network remediation and stabilization, restoring backbone connectivity across MDF and IDFs for a multi-floor hotel system.",
    image: "/projects/coast-seattle-downtown.jpg",
  },
  {
    id: 8,
    title: "Copper Social",
    category: "Multi-Family",
    location: "Marietta, GA",
    units: "264 units",
    description:
      "Network assessment and site survey evaluating fiber backbone, cabling infrastructure, and wireless deployment to support future network redesign and performance improvements.",
    image: "/projects/copper-social.jpg",
  },
  {
    id: 9,
    title: "Fusion @ Rye",
    category: "Multi-Family",
    location: "Houston, TX",
    units: "133 units",
    description:
      "Structured cabling validation and remediation to improve network performance and readiness across a multi-building residential property.",
    image: "/projects/fusion-at-rye.jpg",
  },
  {
    id: 10,
    title: "Hampton Inn",
    category: "Hospitality",
    location: "Orlando, FL",
    units: "123 rooms",
    description:
      "Fiber termination and certification services delivering validated connectivity and ensuring network readiness for deployment.",
    image: "/projects/hampton-inn-orlando.jpg",
  },
  {
    id: 11,
    title: "Homewood Suites",
    category: "Hospitality",
    location: "Tucson, AZ",
    units: "123 rooms",
    description:
      "End-to-end network deployment including structured cabling, WiFi systems, and fiber backbone installation with full certification.",
    image: "/projects/homewood-suites-tucson.jpg",
  },
  {
    id: 12,
    title: "Landing at Lemay",
    category: "Multi-Family",
    location: "Fort Collins, CO",
    units: "344 units",
    description:
      "Fiber and WiFi infrastructure deployment across a multi-building residential community, including MDF/IDF systems, in-unit connectivity, and 300+ fully validated access points.",
    image: "/projects/landing-at-lemay.jpg",
  },
  {
    id: 13,
    title: "Palermo by the Park",
    category: "Multi-Family",
    location: "Frisco, TX",
    units: "384 units",
    description:
      "Fiber and WiFi infrastructure upgrade across a multi-building residential community, including CAT6 post-wire, MDF buildout, in-unit connectivity, and 384 fully deployed access points.",
    image: "/projects/palermo-by-the-park.jpg",
  },
  {
    id: 14,
    title: "Passages at Rye",
    category: "Multi-Family",
    location: "Houston, TX",
    units: "131 units",
    description:
      "Network infrastructure upgrades including cabling remediation, fiber backbone deployment, and organized distribution across multiple buildings.",
    image: "/projects/passages-at-rye.jpg",
  },
  {
    id: 15,
    title: "Reserve at Rye",
    category: "Multi-Family",
    location: "Houston, TX",
    units: "130 units",
    description:
      "Structured cabling upgrades and fiber deployment to enhance network performance and connectivity across residential buildings.",
    image: "/projects/reserve-at-rye.jpg",
  },
  {
    id: 16,
    title: "TownePlace Suites",
    category: "Hospitality",
    location: "Reno, NV",
    units: "96 rooms",
    description:
      "Structured cabling and system integration supporting elevator lobby phone connectivity across multiple floors with fully tested and validated endpoints.",
    image: "/projects/towneplace-suites-reno.jpg",
  },
  {
    id: 17,
    title: "Turtle Creek 2",
    category: "Multi-Family",
    location: "Dallas, TX",
    units: "323 units",
    description:
      "High-rise fiber and WiFi infrastructure deployment across a 20-story residential tower, including MDF/IDF systems, in-unit connectivity, and 300+ access points.",
    image: "/projects/turtle-creek-2.jpg",
  },
  {
    id: 18,
    title: "Vale Luxury",
    category: "Multi-Family",
    location: "Spring, TX",
    units: "350 units",
    description:
      "Full GPON fiber-to-the-unit deployment across a multi-building residential community, including OSP, ISP, and in-unit connectivity.",
    image: "/projects/vale-luxury.jpg",
  },
]

export function ProjectsPageClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-[#030014]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.15),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(0,255,213,0.1),rgba(0,0,0,0))]" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[Building2, Hotel, Warehouse].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${25 + i * 25}%`,
                top: `${35 + (i % 2) * 30}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            >
              <Icon className="w-16 h-16 text-[#a855f7]/20" />
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
            <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Projects That{" "}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#00ffd5] bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From multi-family communities to enterprise campuses, see how we've helped clients transform their infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#030014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Recent Installations
            </h2>
          </div>

          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-500"
                >
                  {/* Property image */}
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] overflow-hidden">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        // Name the property, where it is and what kind of job
                        // it was. These 18 photos are the most specific
                        // content on the site and the alt text is the only
                        // place that was saying nothing.
                        alt={[
                          project.title,
                          project.location,
                          `${project.category.toLowerCase()} technology infrastructure project`,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {project.category === "Multi-Family" && <Building2 className="w-16 h-16 text-[#00ffd5]/20" />}
                        {project.category === "Hospitality" && <Hotel className="w-16 h-16 text-[#a855f7]/20" />}
                        {project.category === "Enterprise" && <Warehouse className="w-16 h-16 text-[#00ffd5]/20" />}
                      </div>
                    )}
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00ffd5]/10 text-[#00ffd5] border border-[#00ffd5]/20 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {project.location && (
                      <div className="flex items-center gap-1 text-sm text-white/40 mb-2">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00ffd5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-[#00ffd5] mb-3">{project.units}</p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-[#00ffd5]/10 border border-[#00ffd5]/20 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-[#00ffd5]/60" />
              </div>
              <p className="text-white/40 text-lg">Featured projects coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(168,85,247,0.1),transparent)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#00ffd5] bg-clip-text text-transparent">
                Next Project
              </span>
              ?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Let's discuss how we can bring the same level of excellence to your infrastructure project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,213,0.4)] transition-all duration-300 hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
