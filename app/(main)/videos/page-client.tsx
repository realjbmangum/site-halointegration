"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play, Youtube, ArrowRight } from "lucide-react"
import Link from "next/link"

const CHANNEL_URL = "https://www.youtube.com/@halo_integration"

// Curated featured videos from Kyle's YouTube channel (@halo_integration).
// To feature a different video: copy the watch?v=<ID> value from YouTube into `id`.
const videos: { id: string; title: string }[] = [
  { id: "SWYiZvNRiuM", title: "What is Technology Roadmapping?" },
  { id: "0zvUwRA2tnE", title: "Ranking the Biggest Mistakes on Construction" },
  { id: "bVnn56t689g", title: "Most Surveillance Issues Aren't Camera Problems" },
  { id: "fnZaviBSzn0", title: "What Makes a Security System Reliable?" },
  { id: "8ywCHG9OWds", title: "You Don't Notice AV Until It's Wrong" },
  { id: "MGtX6Iwi6pI", title: "The First 5 Minutes on a Building" },
  { id: "kz29z4LJ70s", title: "What Actually Matters in a Hotel Experience" },
  { id: "25gB89lmvsw", title: "Access Control Isn't Just Doors" },
  { id: "NGEh7MK3wxs", title: "Everyone Gets Retrofit Wrong" },
]

export function VideosPageClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-[#030014]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Videos
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Halo{" "}
              <span className="bg-gradient-to-r from-[#00ffd5] to-[#a855f7] bg-clip-text text-transparent">
                in Action
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Quick takes on technology, infrastructure, and what we see on every building we walk.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>

      {/* Video Grid */}
      <section className="py-24 bg-[#030014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-500 bg-[#0a0a0f]"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-base font-bold text-white group-hover:text-[#00ffd5] transition-colors">
                    {video.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all on YouTube */}
          <div className="mt-16 text-center">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00ffd5] hover:text-[#030014] hover:border-[#00ffd5] transition-all duration-300 font-semibold"
            >
              <Youtube className="w-5 h-5" />
              View all on YouTube
              <ArrowRight className="w-4 h-4" />
            </a>
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
            <div className="w-14 h-14 rounded-full bg-[#00ffd5]/10 border border-[#00ffd5]/20 flex items-center justify-center mx-auto mb-8">
              <Play className="w-6 h-6 text-[#00ffd5]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Like What You{" "}
              <span className="bg-gradient-to-r from-[#00ffd5] to-[#a855f7] bg-clip-text text-transparent">
                See
              </span>
              ?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Let's talk about the technology behind your next building.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,213,0.4)] transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
