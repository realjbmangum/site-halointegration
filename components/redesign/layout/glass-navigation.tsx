"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function GlassNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    // Run once on mount as well as on scroll. A page opened at a hash, or
    // restored mid-scroll by the browser, would otherwise render the nav
    // transparent over content until the user scrolled again.
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/videos", label: "Videos" },
    { href: "/about", label: "About" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // The `scrolled` state was computed on every scroll event and never
        // applied, so the header had no background at any scroll position and
        // page content ran underneath it. The glass treatment this component
        // is named for is applied here, matching the --glass-border token in
        // app/brand.css. At the very top it stays transparent, which is what
        // the hero sections are designed for.
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <div className="relative">
                {/* Halo glow effect */}
                <div className="absolute -inset-4 bg-[#00ffd5]/0 group-hover:bg-[#00ffd5]/10 blur-xl transition-all duration-500 rounded-full" />
                <Image
                  src="/MASTER LOGO_ALT_WHT_V2.png"
                  alt="Halo Integration"
                  width={500}
                  height={500}
                  className="relative h-14 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00ffd5] to-[#a855f7] group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className="relative px-5 py-2.5 text-sm font-semibold rounded-full overflow-hidden group"
                >
                  {/* Button background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] transition-all duration-300" />
                  {/* Hover overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00d4b0] to-[#00ffd5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Text */}
                  <span className="relative text-[#030014]">Contact Us</span>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#030014]/90 backdrop-blur-md z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-0 right-0 z-40 md:hidden"
            >
              <div className="container mx-auto px-4">
                <div className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <nav className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="pt-4 border-t border-white/10"
                    >
                      <Link
                        href="/contact"
                        className="block px-4 py-3 text-center font-semibold rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </motion.div>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
