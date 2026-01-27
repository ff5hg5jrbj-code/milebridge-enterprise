'use client'
import React from 'react'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b h-20 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        {/* Replace /logo.png with your actual file in the public folder */}
        <a href="#hero" className="flex items-center">
  {/* Increased height from h-12 to h-16 or h-20 */}
  <img src="/logo.png" alt="MileBridge Logo" className="h-16 md:h-20 w-auto object-contain" />
</a>
        
        <div className="hidden md:flex space-x-8 items-center font-bold text-sm tracking-tight text-gray-700">
          <a href="#about" className="hover:text-blue-600 uppercase">Who We Are</a>
          <a href="#services" className="hover:text-blue-600 uppercase">Services</a>
          <a href="#fleet" className="hover:text-blue-600 uppercase">Fleet</a>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors uppercase">Get Quote</a>
        </div>
      </div>
    </nav>
  )
}
