// components/Navigation.tsx
'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeout = useRef<NodeJS.Timeout | null>(null);

  const services = [
    { label: 'Contract Logistics', href: '/services/contract-logistics' },
    { label: 'Express Freight', href: '/services/express-freight' },
    { label: 'Last Mile Delivery', href: '/services/last-mile' },
    { label: 'Cross-Border', href: '/services/cross-border' },
    { label: 'Technology Solutions', href: '/services/technology' },
  ];

  const industries = [
    { label: 'E-Commerce', href: '/industries/e-commerce' },
    { label: 'FMCG', href: '/industries/fmcg' },
    { label: 'Pharmaceuticals', href: '/industries/pharmaceuticals' },
    { label: 'Automotive', href: '/industries/automotive' },
    { label: 'Electronics', href: '/industries/electronics' },
    { label: 'Industrial B2B', href: '/industries/industrial-b2b' },
  ];

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeout.current) clearTimeout(industriesTimeout.current);
    setIndustriesOpen(true);
  };

  const handleIndustriesLeave = () => {
    industriesTimeout.current = setTimeout(() => setIndustriesOpen(false), 200);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MileBridge Logistics" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="text-gray-700 hover:text-red-600 font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
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
              <button className="text-gray-700 hover:text-red-600 font-medium flex items-center gap-1">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">
              About
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-red-600 font-medium">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-red-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 flex justify-between items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="bg-gray-50 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
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
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 flex justify-between items-center"
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="bg-gray-50 pl-4">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-red-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/careers"
              className="block px-4 py-2 text-gray-700 hover:bg-red-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-red-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mx-4 my-2 text-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
