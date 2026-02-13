// components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { getPublicSiteConfig } from '@/lib/public-site-config'

export default async function Footer() {
  const { siteSettings } = await getPublicSiteConfig()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-md ring-1 ring-white/40 mb-4">
              <Image
                src="/logo.png"
                alt="MileBridge Logistics"
                width={180}
                height={40}
                className="h-8 md:h-9 w-auto"
              />
            </div>
            <p className="text-slate-300 text-sm mb-4">
              {siteSettings.tagline}
            </p>
            <p className="text-slate-400 text-xs">
              CIN: U52240JK2025PTC016880
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/contract-logistics" className="text-slate-300 hover:text-white transition">
                  Contract Logistics
                </Link>
              </li>
              <li>
                <Link href="/services/express-freight" className="text-slate-300 hover:text-white transition">
                  Express Freight
                </Link>
              </li>
              <li>
                <Link href="/services/last-mile" className="text-slate-300 hover:text-white transition">
                  Last Mile Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/cross-border" className="text-slate-300 hover:text-white transition">
                  Cross-Border
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>
                  {siteSettings.addressLine1}
                  <br />
                  {siteSettings.addressLine2}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${siteSettings.supportEmail}`}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {siteSettings.supportEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteSettings.careersEmail}`}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {siteSettings.careersEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright and LinkedIn */}
        <div className="border-t border-slate-700/70 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300 text-sm text-center md:text-left">
              © 2026 MileBridge Logistics Private Limited. All rights reserved.
            </p>
            
            {/* LinkedIn Follow Button */}
            <div className="flex items-center gap-4">
              <span className="text-slate-300 text-sm">Follow us:</span>
              <a
                href={siteSettings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-medium shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
