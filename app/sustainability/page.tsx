import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Sustainability | MileBridge Logistics',
  description:
    'MileBridge sustainability roadmap focused on cleaner transport operations, better resource usage, and measurable environmental improvements.',
}

const initiatives = [
  {
    title: 'Cleaner Fleet Mix',
    description:
      'We are piloting low-emission vehicle options on routes where charging support and utilization patterns are operationally stable.',
  },
  {
    title: 'Fuel Efficiency Controls',
    description:
      'Route discipline, idle-time reduction, and load optimization are used to reduce avoidable fuel burn across our network.',
  },
  {
    title: 'Waste Handling Practices',
    description:
      'Hubs follow packaging waste segregation and compliant disposal practices with periodic internal monitoring.',
  },
  {
    title: 'Facility Energy Efficiency',
    description:
      'Lighting upgrades and usage controls are being implemented to reduce non-essential power consumption.',
  },
]

const commitments = [
  'Increase low-emission fleet participation on suitable lanes.',
  'Track route-level fuel performance and monthly variance.',
  'Strengthen recycling and disposal compliance at operating locations.',
  'Train teams on sustainability-oriented SOPs and operating checks.',
  'Include sustainability KPIs in regular operational review forums.',
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="SUSTAINABILITY"
        title="Responsible Logistics, Practical Execution"
        description="Our sustainability model focuses on actions that can be implemented and measured across fleet operations, facilities, and daily execution workflows."
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-red-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Current Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-7">
            {initiatives.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-700 font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Commitment Roadmap</h2>
          <div className="space-y-4">
            {commitments.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex items-start gap-3">
                <span className="text-red-600 mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
