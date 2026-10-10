import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import "./brand.css"
import { SITE_URL, BUSINESS } from "@/lib/site"
import { organizationSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  // metadataBase is what makes every relative canonical and Open Graph image
  // resolve to an absolute URL. Without it Next emits relative og:image paths,
  // which no social or search crawler can follow.
  metadataBase: new URL(SITE_URL),
  // No `template` here on purpose: pageMetadata() in lib/seo.ts already
  // appends the brand, and a template would apply it a second time.
  title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
  description:
    "Low voltage and digital infrastructure contractor for multi-family, hospitality and enterprise properties nationwide. Structured cabling, Wi-Fi, surveillance, access control and VoIP.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
