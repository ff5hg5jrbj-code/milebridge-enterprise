import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { leadership } from '@/lib/team'

export const metadata: Metadata = {
  title: 'Leadership Team | MileBridge Logistics',
  description: 'Meet the leadership team driving execution excellence at MileBridge Logistics.',
}

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="LEADERSHIP"
        title="Leadership Team"
        description="Experienced operators and managers focused on reliable service delivery, disciplined execution, and long-term client partnerships."
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-red-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <article key={leader.name} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-red-600 text-white text-3xl font-bold flex items-center justify-center mb-5">
                  {leader.name.charAt(0)}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h2>
                <p className="text-red-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>

                {leader.linkedin ? (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-red-600 font-semibold hover:text-red-700"
                  >
                    Connect on LinkedIn
                    <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
