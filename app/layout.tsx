import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Loreshelf Solutions - CRM Implementation That Powers Predictable Sales Growth",
  description:
    "Transform your sales process with expert CRM setup, automation, and optimization. Tacoma-based CRM consulting firm helping businesses achieve measurable results in 30 days.",
  keywords:
    "CRM implementation, sales automation, CRM setup, sales process optimization, Tacoma CRM consultant, HubSpot implementation, Salesforce setup",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
