'use client'
import React from 'react'
import BrandedImage from './BrandedImage'

const fleet = [
  { name: '5 Ton GVW', img: '/images/fleet-5t.jpg', spec: 'City Distribution' },
  { name: '9 Ton GVW', img: '/images/fleet-9t.jpg', spec: 'Linehaul & Hubs' },
  { name: '24 Ton GVW', img: '/images/fleet-24t.jpg', spec: 'Heavy Long-Haul' }
];

export function FleetOverview() {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Asset-Backed Fleet</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Assured capacity with a fleet mix ranging from 5T to 24T tailored for all terrains.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {fleet.map((f) => (
            <div key={f.name} className="group">
              <BrandedImage src={f.img} alt={f.name} className="h-72 rounded-[2.5rem] shadow-lg" />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">{f.name}</h3>
                <p className="text-blue-600 font-medium text-sm mt-1">{f.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
