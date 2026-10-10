"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Loader2, Send, CheckCircle } from "lucide-react"
import { BUSINESS } from "@/lib/site"

// Contact details come from the single NAP constant. Local search ranking
// depends on these strings being byte-identical everywhere they appear, and
// this page previously held its own copy alongside the one in lib/site.ts.
const contactInfo = [
  {
    icon: Phone,
    title: BUSINESS.phoneDisplay,
    subtitle: BUSINESS.phone.replace("+1-", ""),
    href: `tel:${BUSINESS.phone.replace(/-/g, "")}`,
  },
  {
    icon: Mail,
    title: BUSINESS.email,
    subtitle: "We'll respond within 24 hours",
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: MapPin,
    title: `${BUSINESS.city}, ${BUSINESS.region}`,
    subtitle: BUSINESS.street,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${BUSINESS.street} ${BUSINESS.city} ${BUSINESS.region} ${BUSINESS.postalCode}`,
    )}`,
  },
]

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
]

export function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("https://formspree.io/f/xpwykanv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Form submission failed")

      setIsSubmitted(true)
      ;(e.target as HTMLFormElement).reset()

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-[#030014] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,213,0.12),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start a{" "}
              <span className="bg-gradient-to-r from-[#00ffd5] to-[#a855f7] bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Ready to transform your infrastructure? We'd love to hear about your project.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
                <p className="text-white/50">We're here to help with your infrastructure needs.</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-[#00ffd5]/10 group-hover:bg-[#00ffd5]/20 transition-colors">
                        <Icon className="w-5 h-5 text-[#00ffd5]" />
                      </div>
                      <div>
                        <div className="text-white font-medium group-hover:text-[#00ffd5] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-sm text-white/50">{item.subtitle}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-xl bg-[#0a0a0f] border border-white/5 overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5!2d-95.8271!3d29.7789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s25140%20Kingsland%20Blvd%2C%20Katy%2C%20TX%2077494!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Halo Integration Office Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a0f] border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="First Name *"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last Name *"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company or Property Name"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Property Type */}
                  <div>
                    <input
                      type="text"
                      name="propertyType"
                      placeholder="Property Type (Multi-Family, Hospitality, Enterprise)"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* City / State row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <select
                        name="state"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/70 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                      >
                        <option value="">Select State</option>
                        {US_STATES.map((state) => (
                          <option key={state} value={state} className="bg-[#0a0a0f]">
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email *"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone *"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="How can we help?"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,213,0.4)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {isSubmitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#00ffd5] text-sm"
                    >
                      Thank you! We'll be in touch within 24 hours.
                    </motion.p>
                  )}

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
