'use client'
import React from 'react'
import BrandedImage from './BrandedImage'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="relative z-10">
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-6">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Asset-Backed Logistics Partner</p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Delivering <span className="text-blue-600">Efficiency</span>.<br />
              Every Mile.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              MileBridge provides SLA-driven FTL and e-commerce logistics with a dedicated fleet and specialized mountain-route expertise [conversation_history:1].
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 uppercase tracking-wide">
                Get a Quote
              </a>
              <a href="#services" className="border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full font-bold text-center hover:bg-gray-50 transition-all uppercase tracking-wide">
                Our Services
              </a>
            </div>
          </div>

          {/* Right Side: Branded Hero Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-2xl -z-10"></div>
            <BrandedImage 
              src="/images/hero-truck.jpg" 
              alt="MileBridge Logistics Truck" 
              className="h-[500px] rounded-[3rem] shadow-2xl border-8 border-white" 
              logoSize="lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
