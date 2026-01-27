'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Mile<span className="text-red-600">Bridge</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600 transition">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition">Contact</Link>
          </div>

          <div className="hidden md:flex">
            <Link href="/contact">
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition font-semibold">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/services" className="text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
