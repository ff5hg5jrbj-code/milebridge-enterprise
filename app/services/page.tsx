import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Logistics Solutions | MileBridge Services',
  description:
    'Explore MileBridge services across contract logistics, express freight, last-mile delivery, cross-border logistics, and technology-led control tower operations.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="MILEBRIDGE SERVICES"
        title="Enterprise Logistics Services Built for Execution"
        description="From warehousing and freight to last-mile and technology control, our services are structured around measurable SLAs and operational accountability."
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-red-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-7">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-5 leading-relaxed">{service.shortDescription}</p>

                  <h3 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">Core Scope</h3>
                  <ul className="space-y-2 mb-6">
                    {service.serviceScope.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Explore Service
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
