import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import PageHero from '@/components/PageHero'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.title} | MileBridge Logistics`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen">
      <PageHero eyebrow="SERVICE DETAIL" title={service.title} description={service.shortDescription}>
        <div className="mt-6 text-6xl">{service.icon}</div>
      </PageHero>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-red-600 hover:text-red-700 font-semibold">
            ← Back to all services
          </Link>
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{service.fullDescription}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">What This Service Covers</h3>
              <ul className="space-y-3">
                {service.serviceScope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-600 mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Operating Flow</h3>
              <ol className="space-y-3">
                {service.operationalFlow.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="text-gray-700 flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ideal Use Cases</h3>
              <ul className="space-y-2">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="text-gray-700 flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">SLA Metrics</h3>
              <ul className="space-y-2">
                {service.slaMetrics.map((metric) => (
                  <li key={metric} className="text-gray-700 flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {service.slug === 'technology' ? (
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-10 mb-10">
              <h3 className="text-2xl font-bold mb-4">Technology Modules Available for Deployment</h3>
              <p className="text-gray-200 mb-6">
                The Alyte platform now includes real tracking, control tower analytics, predictive ETA and rerouting,
                communication automation, ePOD intelligence, and standards-ready integration rails.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/technology"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  View Platform Experience
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/35 bg-white/10 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/20 transition"
                >
                  Discuss Rollout
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ) : null}

          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Need This Service for Your Operations?</h3>
            <p className="text-gray-200 mb-6">
              Share your shipment profile, volume, and SLA targets. Our team will propose an execution model with clear timelines.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-red-50/60 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
