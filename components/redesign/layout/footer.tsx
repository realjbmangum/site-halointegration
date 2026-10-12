"use client"

import Link from "next/link"
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { BUSINESS } from "@/lib/site"

export function FooterRedesign() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    // The seven service pages. These are the pages intended to rank, so they
    // need a site-wide internal link rather than only a card on /services/.
    services: [
      { label: "Structured Cabling", href: "/services/structured-cabling" },
      { label: "Network & Wi-Fi", href: "/services/network-wifi" },
      { label: "Video Surveillance", href: "/services/video-surveillance" },
      { label: "Access Control", href: "/services/access-control" },
      { label: "VoIP Phone Systems", href: "/services/voip-phone-systems" },
      { label: "Audio & Video", href: "/services/audio-video" },
      { label: "Prop-Tech Consulting", href: "/services/prop-tech-consulting" },
    ],
    industries: [
      { label: "Multi-Family", href: "/services/multi-family" },
      { label: "Hospitality", href: "/services/hospitality" },
      { label: "Enterprise", href: "/services/enterprise" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Videos", href: "/videos" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  }

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffd5]/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gradient">HALO</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Low voltage and digital infrastructure for multi-family, hospitality and enterprise
              properties. Surveyed, designed, installed and certified.
            </p>
            <div className="flex gap-3">
              {/* Sourced from the single NAP constant. This previously
                  pointed at hello@, while the contact page, the JSON-LD and
                  every other reference used info@. Inconsistent contact
                  details are exactly what this constant exists to prevent. */}
              <a
                href={`mailto:${BUSINESS.email}`}
                aria-label={`Email ${BUSINESS.name}`}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00ffd5] hover:border-[#00ffd5]/30 hover:bg-[#00ffd5]/10 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/halo-integration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BUSINESS.name} on LinkedIn`}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00ffd5] hover:border-[#00ffd5]/30 hover:bg-[#00ffd5]/10 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-white/50 hover:text-[#00ffd5] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-white/50 hover:text-[#00ffd5] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-white/50 hover:text-[#00ffd5] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
            <p className="text-sm text-white/50 mb-6">
              Ready to transform your infrastructure?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00ffd5] hover:text-[#0a0a0f] hover:border-[#00ffd5] transition-all duration-300"
            >
              Start a Conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} Halo Integration. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </div>
    </footer>
  )
}
