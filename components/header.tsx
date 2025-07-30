"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Loreshelf</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-slate-300 hover:border-blue-600 bg-transparent">
              <span className="text-black">Interactive Demo</span>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <span className="text-white">Start Free Trial</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/features" className="text-slate-600 hover:text-blue-600 font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-slate-600 hover:text-blue-600 font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/resources" className="text-slate-600 hover:text-blue-600 font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-slate-300 bg-transparent">
                  <span className="text-black">Interactive Demo</span>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <span className="text-white">Start Free Trial</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
