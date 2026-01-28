'use client'
import React, { useState } from 'react'


export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  
  // Timeout refs to manage delays
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [industriesTimeout, setIndustriesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [companyTimeout, setCompanyTimeout] = useState<NodeJS.Timeout | null>(null)


  const handleMouseEnter = (dropdown: string) => {
    if (dropdown === 'services') {
      if (servicesTimeout) clearTimeout(servicesTimeout)
      setIsServicesOpen(true)
    } else if (dropdown === 'industries') {
      if (industriesTimeout) clearTimeout(industriesTimeout)
      setIsIndustriesOpen(true)
    } else if (dropdown === 'company') {
      if (companyTimeout) clearTimeout(companyTimeout)
      setIsCompanyOpen(true)
    }
  }


  const handleMouseLeave = (dropdown: string) => {
    if (dropdown === 'services') {
      const timeout = setTimeout(() => setIsServicesOpen(false), 300)
      setServicesTimeout(timeout)
    } else if (dropdown === 'industries') {
      const timeout = setTimeout(() => setIsIndustriesOpen(false), 300)
      setIndustriesTimeout(timeout)
    } else if (dropdown === 'company') {
      const timeout = setTimeout(() => setIsCompanyOpen(false), 300)
      setCompanyTimeout(timeout)
    }
  }


  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center h-28 md:h-32">
        
        {/* Large Brand Logo */}
        <a href="/" className="flex items-center transition-transform hover:scale-105">
          <img 
            src="/logo.png" 
            alt="MileBridge Logo" 
            className="h-20 md:h-28 w-auto object-contain" 
          />
        </a>
        
        {/* Navigation Menu */}
        <div className="hidden md:flex space-x-8 items-center font-bold text-xs lg:text-sm tracking-tight text-gray-700">
          
          {/* WHO WE ARE Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={() => handleMouseLeave('company')}
          >
            <button className="hover:text-blue-600 uppercase transition-colors flex items-center gap-1">
              Who We Are
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isCompanyOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <a href="/about" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">About Us</div>
                </a>
                <a href="/leadership" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Leadership</div>
                </a>
                <a href="/careers" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Careers</div>
                </a>
                <a href="/technology" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Technology</div>
                </a>
                <a href="/sustainability" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Sustainability</div>
                </a>
              </div>
            )}
          </div>
          
          {/* SERVICES Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={() => handleMouseLeave('services')}
          >
            <a href="/services" className="hover:text-blue-600 uppercase transition-colors flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <a href="/services/ftl" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Full Truckload (FTL)</div>
                  <div className="text-xs text-gray-500 font-normal">Complete truck capacity</div>
                </a>
                <a href="/services/ltl" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Less Than Truckload (LTL)</div>
                  <div className="text-xs text-gray-500 font-normal">Shared truck space</div>
                </a>
                <a href="/services/ecommerce" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">E-commerce Logistics</div>
                  <div className="text-xs text-gray-500 font-normal">Online retail solutions</div>
                </a>
                <a href="/services/specialized" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Specialized Transport</div>
                  <div className="text-xs text-gray-500 font-normal">Custom cargo handling</div>
                </a>
                <a href="/services/mountain-routes" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Mountain Route Expertise</div>
                  <div className="text-xs text-gray-500 font-normal">High-altitude logistics</div>
                </a>
              </div>
            )}
          </div>


          {/* INDUSTRIES Dropdown - UPDATED WITH ALL 6 */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={() => handleMouseLeave('industries')}
          >
            <a href="/industries" className="hover:text-blue-600 uppercase transition-colors flex items-center gap-1">
              Industries
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            {isIndustriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <a href="/industries/ecommerce" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">E-Commerce</div>
                </a>
                <a href="/industries/fmcg" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">FMCG</div>
                </a>
                <a href="/industries/pharma" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Pharmaceuticals</div>
                </a>
                <a href="/industries/automotive" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Automotive</div>
                </a>
                <a href="/industries/electronics" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Electronics</div>
                </a>
                <a href="/industries/industrial-b2b" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <div className="font-semibold">Industrial B2B</div>
                </a>
              </div>
            )}
          </div>
          
          {/* Direct Links */}
          <a href="/fleet" className="hover:text-blue-600 uppercase transition-colors">Our Fleet</a>
          <a href="/mountain-specialist" className="hover:text-blue-600 uppercase transition-colors text-blue-700">Mountain Specialist</a>
          
          {/* Action Button */}
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all uppercase shadow-lg shadow-blue-100"
          >
            Get Quote
          </a>
        </div>


        {/* Mobile Contact Link */}
        <a href="/contact" className="md:hidden bg-blue-600 text-white p-2 rounded-full">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
           </svg>
        </a>
      </div>
    </nav>
  )
}
