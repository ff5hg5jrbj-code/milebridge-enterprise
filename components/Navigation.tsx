'use client'
import React from 'react'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center h-28 md:h-32">
        
        {/* Large Brand Logo */}
        <a href="#hero" className="flex items-center transition-transform hover:scale-105">
          <img 
            src="/logo.png" 
            alt="MileBridge Logo" 
            className="h-20 md:h-28 w-auto object-contain" 
          />
        </a>
        
        {/* Navigation Menu */}
        <div className="hidden md:flex space-x-8 items-center font-bold text-xs lg:text-sm tracking-tight text-gray-700">
          <a href="#about" className="hover:text-blue-600 uppercase transition-colors">Who We Are</a>
          <a href="#services" className="hover:text-blue-600 uppercase transition-colors">Services</a>
          <a href="#fleet" className="hover:text-blue-600 uppercase transition-colors">Our Fleet</a>
          <a href="#mountain-routes" className="hover:text-blue-600 uppercase transition-colors text-blue-700">Mountain Specialist</a>
          
          {/* Action Button */}
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all uppercase shadow-lg shadow-blue-100"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Contact Link (Visible only on small screens) */}
        <a href="#contact" className="md:hidden bg-blue-600 text-white p-2 rounded-full">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
           </svg>
        </a>
      </div>
    </nav>
  )
}
