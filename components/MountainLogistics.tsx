'use client'
import React from 'react'
import BrandedImage from './BrandedImage'

export function MountainLogistics() {
  return (
    <section id="mountain-routes" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Mountain Specialist</p>
          <h2 className="text-5xl font-black mb-8 leading-tight">Navigating the <span className="text-blue-400">Challenging Geographies</span> of North India.</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-10 opacity-90">
            MileBridge excels in the Ladakh and J&K corridors. With 15+ years of experience, we ensure 99.8% on-time performance even in remote terrains [file:37].
          </p>
          <div className="flex gap-8 border-t border-white/10 pt-10">
            <div><p className="text-3xl font-black text-blue-400">15+</p><p className="text-xs uppercase font-bold text-white/60">Years Exp</p></div>
            <div><p className="text-3xl font-black text-blue-400">99.8%</p><p className="text-xs uppercase font-bold text-white/60">SLA Accuracy</p></div>
          </div>
        </div>

        <div className="relative">
          <BrandedImage 
            src="/images/mountain-route.jpg" 
            alt="MileBridge Mountain Logistics" 
            className="h-[500px] rounded-[3rem] shadow-2xl border-4 border-white/10" 
            logoSize="lg" 
          />
          {/* Decorative Float Element */}
          <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-2xl shadow-xl max-w-[200px]">
            <p className="text-sm font-bold">Route Focus:</p>
            <p className="text-xs opacity-80 mt-1">Srinagar, Leh, Jammu & Ladakh Spine.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
