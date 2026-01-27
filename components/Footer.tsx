'use client'
import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        
        {/* Company Info */}
        <div className="flex flex-col space-y-6">
          <img 
            src="/logo.png" 
            alt="MileBridge Logo" 
            className="h-16 w-auto object-contain brightness-0 invert" 
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering Efficiency. Every Mile. <br />
            As a leading logistics provider within India, MileBridge has been driving logistics forward for over 15 years.
          </p>
          <div className="flex space-x-4 text-xs font-bold text-blue-400 uppercase tracking-widest">
            <span>ISO 9001</span>
            <span>ISO 14001</span>
            <span>AEO Certified</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-blue-600 w-fit pb-2">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
            <li><a href="#fleet" className="hover:text-white transition-colors">Our Fleet</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Get a Quote</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-
