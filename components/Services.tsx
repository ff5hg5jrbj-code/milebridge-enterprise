'use client'
import React from 'react'
import BrandedImage from './BrandedImage'

const services = [
  {
    title: 'Full Truckload (FTL)',
    img: '/images/services-ftl.jpg',
    badge: 'Primary Network',
    desc: 'End-to-end movements for enterprise clients with dedicated capacity.'
  },
  {
    title: 'E-Commerce Linehaul',
    img: '/images/services-ecom.jpg',
    badge: 'Time-Definite',
    desc: 'Middle-mile and last-mile support aligned to e-commerce SLAs.'
  },
  {
    title: 'Contract Fleet',
    img: '/images/services-contract.jpg',
    badge: 'Custom Solution',
    desc: 'Long-term fleet deployment for seasonal surges and large accounts.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Core Service Lines</p>
          <h2 className="text-4xl font-black text-gray-900">Built for Enterprise Logistics.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <BrandedImage src={s.img} alt={s.title} className="h-64" />
              <div className="p-8">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">{s.badge}</span>
                <h3 className="text-2xl font-bold mt-4 mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a href="#contact" className="text-blue-600 font-bold text-sm uppercase tracking-wide hover:underline">Discuss Service →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
