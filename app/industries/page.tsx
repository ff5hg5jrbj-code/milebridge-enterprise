import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/lib/industries'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Industries We Serve | MileBridge Logistics',
  description:
    'Specialized logistics solutions for e-commerce, FMCG, pharmaceuticals, automotive, electronics, and industrial B2B sectors.',
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="INDUSTRY SOLUTIONS"
        title="Logistics Models Built for Sector-Specific Needs"
        description="Each industry has a different service rhythm. We tailor execution plans, risk controls, and SLA governance to your operating context."
      />

      <section className="py-16 bg-gradient-to-b from-white to-red-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {industry.title}
                </h2>
                <p className="text-gray-600 mb-5">{industry.shortDescription}</p>
                <span className="text-red-600 font-semibold inline-flex items-center gap-2">
                  View Industry Playbook
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Operating Model?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We can design a sector-specific logistics plan around your dispatch volumes, delivery footprint, and customer promise.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </section>
    </div>
  )
}
