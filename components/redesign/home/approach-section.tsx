"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

const approaches = [
  "Deep understanding of your business objectives",
  "Personalized solutions tailored to your needs",
  "Continuous optimization and support",
  "Future-proof technology investments",
]

export function ApproachSectionRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00ffd5]/5 blur-[150px] rounded-full -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Main image */}
              <img
                src="/modern-technology-infrastructure-consulting-team-c.jpg"
                alt="Halo Integration approach"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 p-6 rounded-xl glass-card border border-[#00ffd5]/20"
            >
              <div className="text-4xl font-bold text-gradient mb-1">50+</div>
              <div className="text-sm text-white/60">Years Combined Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient">Relationship</span> centered
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              At the heart of everything we do is a commitment to building meaningful, lasting relationships with our
              clients. We don't just implement technology, we become your trusted partner in digital transformation.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              {approaches.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00ffd5]/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#00ffd5]" />
                  </div>
                  <span className="text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-white/50 leading-relaxed">
              From initial consultation through implementation and beyond, we're with you every step of the way,
              providing expert guidance, responsive support, and continuous optimization to maximize your technology
              investments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
