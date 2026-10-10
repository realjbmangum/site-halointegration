"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Camera, Lock, Wifi, Phone, Briefcase, Cable } from "lucide-react"

// Infrastructure nodes representing what Halo does
const infrastructureNodes = [
  { icon: Camera, label: "Surveillance", x: "15%", y: "25%", delay: 0 },
  { icon: Lock, label: "Access Control", x: "85%", y: "30%", delay: 0.5 },
  { icon: Cable, label: "Structured Cabling", x: "50%", y: "15%", delay: 1 },
  { icon: Phone, label: "VoIP Phones", x: "20%", y: "70%", delay: 1.5 },
  { icon: Briefcase, label: "Technology Strategy & Consulting", x: "80%", y: "75%", delay: 2 },
  { icon: Wifi, label: "Wi-Fi Networks", x: "50%", y: "85%", delay: 2.5 },
]

// Connection paths between nodes (representing infrastructure wiring)
const connections = [
  { from: { x: 15, y: 25 }, to: { x: 50, y: 15 } },
  { from: { x: 50, y: 15 }, to: { x: 85, y: 30 } },
  { from: { x: 85, y: 30 }, to: { x: 80, y: 75 } },
  { from: { x: 80, y: 75 }, to: { x: 50, y: 85 } },
  { from: { x: 50, y: 85 }, to: { x: 20, y: 70 } },
  { from: { x: 20, y: 70 }, to: { x: 15, y: 25 } },
  // Cross connections
  { from: { x: 50, y: 15 }, to: { x: 50, y: 85 } },
  { from: { x: 15, y: 25 }, to: { x: 80, y: 75 } },
  { from: { x: 20, y: 70 }, to: { x: 85, y: 30 } },
]

export function HeroRedesign() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Base gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,213,0.12),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(168,85,247,0.08),rgba(0,0,0,0))]" />
      </div>

      {/* Blueprint grid - like technical drawings */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,213,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,213,0.5) 1px, transparent 1px),
              linear-gradient(rgba(0,255,213,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,213,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)',
          }}
        />
      </div>

      {/* Infrastructure connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for the cable lines */}
          <linearGradient id="cable-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffd5" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00ffd5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00ffd5" stopOpacity="0.3" />
          </linearGradient>

          {/* Animated pulse gradient */}
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffd5" stopOpacity="0">
              <animate attributeName="offset" values="-0.5;1" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#00ffd5" stopOpacity="1">
              <animate attributeName="offset" values="0;1.5" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#00ffd5" stopOpacity="0">
              <animate attributeName="offset" values="0.5;2" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines (cables) */}
        {connections.map((conn, i) => (
          <g key={i}>
            {/* Base cable line */}
            <line
              x1={`${conn.from.x}%`}
              y1={`${conn.from.y}%`}
              x2={`${conn.to.x}%`}
              y2={`${conn.to.y}%`}
              stroke="url(#cable-gradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            {/* Animated data pulse */}
            <motion.circle
              r="3"
              fill="#00ffd5"
              filter="url(#glow)"
              initial={{
                cx: `${conn.from.x}%`,
                cy: `${conn.from.y}%`,
                opacity: 0
              }}
              animate={{
                cx: [`${conn.from.x}%`, `${conn.to.x}%`],
                cy: [`${conn.from.y}%`, `${conn.to.y}%`],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            />
          </g>
        ))}
      </svg>

      {/* Infrastructure nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {infrastructureNodes.map((node, i) => {
          const Icon = node.icon
          return (
            <motion.div
              key={node.label}
              className="absolute"
              style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: node.delay + 0.5, duration: 0.5, type: "spring" }}
            >
              {/* Outer ring pulse */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#00ffd5]/30"
                style={{ width: 100, height: 100, left: -18, top: -18 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: node.delay }}
              />

              {/* Node container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-[#00ffd5]/20 blur-xl scale-150" />

                {/* Icon container */}
                <div className="relative w-16 h-16 rounded-full bg-[#0a0a0f] border border-[#00ffd5]/50 flex items-center justify-center">
                  <Icon className="w-9 h-9 text-[#00ffd5]" />
                </div>
              </div>

              {/* Label */}
              <motion.div
                className="absolute top-14 left-1/2 -translate-x-1/2 w-20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: node.delay + 1 }}
              >
                <span className="text-[10px] text-white/40 uppercase tracking-wider">{node.label}</span>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Subtle building silhouette in background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">
          <rect x="50" y="80" width="120" height="120" fill="white" />
          <rect x="200" y="40" width="150" height="160" fill="white" />
          <rect x="380" y="100" width="100" height="100" fill="white" />
          <rect x="510" y="20" width="180" height="180" fill="white" />
          <rect x="720" y="60" width="130" height="140" fill="white" />
          <rect x="880" y="90" width="110" height="110" fill="white" />
          <rect x="1020" y="50" width="140" height="150" fill="white" />
        </svg>
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline.
              One <h1> for the whole headline, with each line as a block span.
              This previously shipped as three separate <h1> tags, one per
              animated line, which split the page's strongest ranking signal
              into three fragments. The wording, the stagger and the rendered
              result are unchanged. */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            <span className="block overflow-hidden mb-4">
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block text-white"
              >
                Illuminating
              </motion.span>
            </span>{" "}
            <span className="block overflow-hidden mb-4">
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="block bg-gradient-to-r from-[#00ffd5] via-[#00d4b0] to-[#a855f7] bg-clip-text text-transparent"
              >
                Infrastructure
              </motion.span>
            </span>{" "}
            <span className="block overflow-hidden mb-8">
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="block text-white"
              >
                with Excellence
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Structured cabling, access control, video surveillance, and digital solutions.
            Turnkey technology solutions, the backbone of modern business, engineered from design through deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,213,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-[#00ffd5] shadow-[0_0_8px_rgba(0,255,213,0.8)]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  )
}
