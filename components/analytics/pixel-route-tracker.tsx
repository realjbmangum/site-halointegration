"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

/**
 * Counts a PageView when Next navigates on the client.
 *
 * The base pixel in AdPixels fires one PageView when the page loads. Every
 * route after that is a client-side navigation with no page load, so without
 * this the only page Meta ever sees is the one the visitor landed on. For a
 * campaign driving traffic to service pages that would undercount everything
 * past the first click.
 *
 * Separate from AdPixels on purpose: that one has to be a server component so
 * its scripts reach the static HTML, and this one has to be a client
 * component to read the pathname. Merging them breaks whichever half loses.
 */
export function PixelRouteTracker() {
  const pathname = usePathname()
  const isInitialLoad = useRef(true)

  useEffect(() => {
    // The inline snippet already counted the landing page. Skipping the first
    // run avoids counting it twice.
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      return
    }
    try {
      window.fbq?.("track", "PageView")
    } catch {
      // Measurement must never break navigation.
    }
  }, [pathname])

  return null
}
