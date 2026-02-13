import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About MileBridge Logistics',
  description:
    'Learn how MileBridge Logistics delivers enterprise logistics outcomes through asset-backed infrastructure, disciplined operations, and SLA-led execution.',
}

const milestones = [
  { label: 'Delivery Hubs', value: '10+' },
  { label: 'Fleet Vehicles', value: '40+' },
  { label: 'Team Members', value: '500+' },
  { label: 'On-Time Delivery', value: '99.8%' },
]

const values = [
  {
    title: 'Reliability First',
    description:
      'We design operating plans around realistic transit commitments and track every lane against measurable SLAs.',
  },
  {
    title: 'Execution Discipline',
    description:
      'Clear SOPs, escalation paths, and daily reviews keep operations consistent across hubs, fleets, and teams.',
  },
  {
    title: 'Customer Accountability',
    description:
      'We provide transparent updates, fast exception handling, and practical action plans for continuous service improvement.',
  },
]

const capabilities = [
  {
    title: 'Express & Freight',
    description:
      'Time-critical line-haul and full truckload movement with route-level monitoring and controlled handoffs.',
    href: '/services/express-freight',
  },
  {
    title: 'Last-Mile Delivery',
    description:
      'Pin-code delivery execution with route clustering, first-attempt focus, and customer communication at every milestone.',
    href: '/services/last-mile',
  },
  {
    title: 'Contract Logistics',
    description:
      'Warehouse, fulfillment, and dispatch operations configured around your volume profile and service commitments.',
    href: '/services/contract-logistics',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="ABOUT MILEBRIDGE"
        title="Built for Reliable Logistics Execution"
        description="MileBridge Logistics Private Limited is an enterprise logistics partner focused on SLA-led delivery, operational clarity, and dependable service in complex terrains."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                <p>
                  Founded in January 2025, MileBridge was established to solve a practical problem: dependable logistics execution in regions where terrain, weather, and infrastructure often disrupt standard delivery models.
                </p>
                <p>
                  Under the leadership of Sahil Fayaz, our teams have scaled multi-hub operations across Jammu and Kashmir while maintaining strong delivery performance and customer accountability.
                </p>
                <p>
                  We combine asset-backed infrastructure, trained operations teams, and technology-enabled visibility to support enterprise clients with measurable service outcomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {milestones.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-red-50/70 p-6 shadow-sm"
                >
                  <p className="text-3xl font-extrabold text-gray-900 mb-2">{item.value}</p>
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-red-50/60 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <article className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver enterprise logistics services that are predictable, transparent, and scalable, even in challenging operating environments.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be India&apos;s most trusted logistics execution partner by combining disciplined operations, local expertise, and continuous performance improvement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Execute</h2>
            <p className="text-lg text-gray-600">
              Our service portfolio is built for high-accountability logistics programs with clear operating playbooks and measurable SLAs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <Link href={item.href} className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700">
                  Explore service
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-center rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10">
            <div className="relative h-80 rounded-2xl overflow-hidden ring-1 ring-white/15">
              <Image
                src="/images/sahil-fayaz.jpg"
                alt="Sahil Fayaz, Founder of MileBridge Logistics"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-red-100 mb-5">
                LEADERSHIP
              </p>
              <h3 className="text-3xl font-bold mb-2">Sahil Fayaz</h3>
              <p className="text-red-200 font-semibold mb-5">Director & Founder</p>
              <p className="text-gray-200 leading-relaxed mb-6">
                With nearly a decade of logistics and operations experience, Sahil leads MileBridge with a strong focus on service reliability, scalable systems, and front-line execution quality.
              </p>
              <Link href="/leadership" className="inline-flex items-center gap-2 text-white font-semibold hover:text-red-200">
                Meet the leadership team
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-7">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-red-50/50 p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950 text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Logistics Program with MileBridge</h2>
          <p className="text-lg text-gray-300 mb-8">
            Share your service footprint, volume pattern, and SLA targets. We&apos;ll design a practical plan for reliable delivery outcomes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Talk to Our Team
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
