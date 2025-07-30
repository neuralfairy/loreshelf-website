import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Loreshelf</span>
            </div>
            <p className="text-slate-400 text-sm">
              Transforming businesses through expert CRM implementation and sales process optimization.
            </p>
            <div className="text-sm text-slate-400">
              <p>Tacoma, WA</p>
              <p>contact@loreshelf.com</p>
              <p>(253) 555-0123</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  CRM Implementation
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Sales Automation
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  System Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
              <p className="text-slate-400 text-sm">Transform your sales process today.</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <span className="text-white">Partner Portal</span>
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent">
                <span className="text-white">Customer Portal</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-4">
            <p>&copy; 2024 Loreshelf Solutions. All rights reserved.</p>
            <Link href="https://salescentri.com" className="hover:text-white transition-colors">
              Powered by Sales Intelligence Platform
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
