import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Deepthi Sathyanarayanan - Full Stack Engineer",
  description:
    "Full Stack Engineer with 5 years of experience building scalable web applications and AI-powered tools. Expertise in TypeScript, React, Next.js, Python, and cloud platforms.",
  generator: "v0.app",
  keywords: [
    "Full Stack Engineer",
    "Software Engineer",
    "AI/ML",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "AWS",
    "Data Science",
  ],
  authors: [{ name: "Deepthi Sathyanarayanan" }],
  creator: "Deepthi Sathyanarayanan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
