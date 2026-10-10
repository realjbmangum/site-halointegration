"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Building2, Hotel, Warehouse, MapPin } from "lucide-react"

// Project cards. Content supplied by the client.
import { PROJECTS as projects } from "@/lib/projects"

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
