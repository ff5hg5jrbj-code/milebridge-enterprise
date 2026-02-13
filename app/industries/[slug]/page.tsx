import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { industries } from '@/lib/industries'
import PageHero from '@/components/PageHero'

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((item) => item.slug === slug)
  if (!industry) return { title: 'Industry Not Found' }

  return {
    title: `${industry.title} Logistics | MileBridge`,
    description: industry.shortDescription,
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = industries.find((item) => item.slug === slug)

  if (!industry) {
    notFound()
  }

  const relatedIndustries = industries.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen">
      <PageHero eyebrow="INDUSTRY DETAIL" title={`${industry.title} Logistics`} description={industry.shortDescription}>
        <div className="mt-6 text-6xl">{industry.icon}</div>
      </PageHero>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/industries" className="text-red-600 hover:text-red-700 font-semibold">
            ← Back to all industries
          </Link>
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{industry.fullDescription}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Operational Challenges</h3>
              <ul className="space-y-3">
                {industry.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className="text-red-600 mt-0.5">⚠</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">MileBridge Solutions</h3>
              <ul className="space-y-3">
                {industry.solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <span className="text-red-600 mt-0.5">✓</span>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {industry.caseStudies.length > 0 ? (
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Case Studies</h3>
              <div className="space-y-6">
                {industry.caseStudies.map((caseStudy) => (
                  <article key={caseStudy.title} className="bg-white border border-gray-200 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h4>
                    <p className="text-sm text-gray-500 mb-6">{caseStudy.client}</p>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="text-sm font-semibold uppercase tracking-wide text-red-700 mb-2">Challenge</h5>
                        <p className="text-gray-700">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold uppercase tracking-wide text-red-700 mb-2">Solution</h5>
                        <p className="text-gray-700">{caseStudy.solution}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold uppercase tracking-wide text-red-700 mb-2">Results</h5>
                        <ul className="space-y-1">
                          {caseStudy.results.map((result) => (
                            <li key={result} className="text-gray-700">
                              • {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Improve Your {industry.title} Logistics?</h3>
            <p className="text-gray-200 mb-6">
              Share your network challenges and delivery requirements. We will propose a practical execution plan.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {relatedIndustries.length > 0 ? (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-red-50/60 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Other Industries We Serve</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedIndustries.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
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
