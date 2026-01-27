'use client'
import React from 'react'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MileBridge</div>
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}
