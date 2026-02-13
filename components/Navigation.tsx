'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const pathname = usePathname()
  
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null)
  const industriesTimeout = useRef<NodeJS.Timeout | null>(null)

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeout.current) clearTimeout(servicesTimeout.current)
      if (industriesTimeout.current) clearTimeout(industriesTimeout.current)
    }
  }, [])

  const services = [
    { label: 'Contract Logistics', href: '/services/contract-logistics' },
    { label: 'Express Freight', href: '/services/express-freight' },
    { label: 'Last Mile Delivery', href: '/services/last-mile' },
    { label: 'Cross-Border', href: '/services/cross-border' },
    { label: 'Technology Solutions', href: '/services/technology' },
  ]

  const industries = [
    { label: 'E-Commerce', href: '/industries/e-commerce' },
    { label: 'FMCG', href: '/industries/fmcg' },
    { label: 'Pharmaceuticals', href: '/industries/pharmaceuticals' },
    { label: 'Automotive', href: '/industries/automotive' },
    { label: 'Electronics', href: '/industries/electronics' },
    { label: 'Industrial B2B', href: '/industries/industrial-b2b' },
  ]

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current)
    setServicesOpen(true)
  }

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200)
  }

  const handleIndustriesEnter = () => {
    if (industriesTimeout.current) clearTimeout(industriesTimeout.current)
    setIndustriesOpen(true)
  }

  const handleIndustriesLeave = () => {
    industriesTimeout.current = setTimeout(() => setIndustriesOpen(false), 200)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setIndustriesOpen(false)
  }

  return (
    <nav 
      className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
            aria-label="MileBridge Logistics - Home"
          >
            <Image
              src="/logo.png"
              alt="MileBridge Logistics"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-semibold tracking-[0.01em] transition-colors ${
                pathname === '/' ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button 
                className={`font-semibold tracking-[0.01em] flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-3 w-60 bg-white rounded-xl shadow-lg py-2 border border-gray-200"
                  role="menu"
                  aria-label="Services submenu"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-2 transition-colors ${
                        pathname === service.href 
                          ? 'bg-red-50 text-red-600' 
                          : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                      role="menuitem"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleIndustriesEnter}
              onMouseLeave={handleIndustriesLeave}
            >
              <button 
                className={`font-semibold tracking-[0.01em] flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/industries') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                aria-expanded={industriesOpen}
                aria-haspopup="true"
                aria-label="Industries menu"
              >
                Industries
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div 
                  className="absolute left-0 mt-3 w-60 bg-white rounded-xl shadow-lg py-2 border border-gray-200"
                  role="menu"
                  aria-label="Industries submenu"
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className={`block px-4 py-2 transition-colors ${
                        pathname === industry.href 
                          ? 'bg-red-50 text-red-600' 
                          : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                      role="menuitem"
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className={`font-semibold tracking-[0.01em] transition-colors ${
                pathname === '/about' ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About
            </Link>
            <Link 
              href="/technology" 
              className={`font-semibold tracking-[0.01em] transition-colors ${
                pathname === '/technology' ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Technology
            </Link>
            <Link 
              href="/careers" 
              className={`font-semibold tracking-[0.01em] transition-colors ${
                pathname === '/careers' ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className={`font-semibold tracking-[0.01em] transition-colors ${
                pathname === '/contact' ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button - FIX #5: Accessibility */}
          <button
            className="md:hidden text-gray-700 p-2 hover:text-red-600 transition rounded-lg hover:bg-red-50/70"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - FIX #5: ID + ARIA */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 bg-white rounded-b-xl"
            role="menu"
          >
            <Link
              href="/"
              className={`block px-4 py-2 transition-colors ${
                pathname === '/' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-red-50'
              }`}
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 flex justify-between items-center transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-label="Toggle services menu"
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="bg-gray-50 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === service.href 
                          ? 'text-red-600 font-semibold' 
                          : 'text-gray-600 hover:text-red-600'
                      }`}
                      onClick={closeMobileMenu}
                      role="menuitem"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 flex justify-between items-center transition-colors"
                onClick={() => setIndustriesOpen(!industriesOpen)}
                aria-expanded={industriesOpen}
                aria-label="Toggle industries menu"
              >
                Industries
                <svg 
                  className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="bg-gray-50 pl-4">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === industry.href 
                          ? 'text-red-600 font-semibold' 
                          : 'text-gray-600 hover:text-red-600'
                      }`}
                      onClick={closeMobileMenu}
                      role="menuitem"
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`block px-4 py-2 transition-colors ${
                pathname === '/about' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-red-50'
              }`}
              onClick={closeMobileMenu}
              role="menuitem"
            >
              About
            </Link>
            <Link
              href="/technology"
              className={`block px-4 py-2 transition-colors ${
                pathname === '/technology' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-red-50'
              }`}
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Technology
            </Link>
            <Link
              href="/careers"
              className={`block px-4 py-2 transition-colors ${
                pathname === '/careers' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-red-50'
              }`}
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2 transition-colors ${
                pathname === '/contact' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-red-50'
              }`}
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mx-4 my-2 text-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition shadow-md font-semibold"
              onClick={closeMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
