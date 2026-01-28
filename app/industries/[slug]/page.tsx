// app/industries/[slug]/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { industries } from '@/lib/industries';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: 'Industry Not Found' };
  
  return {
    title: `${industry.title} Logistics | MileBridge`,
    description: industry.shortDescription,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  
  if (!industry) {
    notFound();
  }

  const relatedIndustries = industries.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{industry.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold">{industry.title} Logistics</h1>
          </div>
          <p className="text-xl max-w-3xl">{industry.shortDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/industries" className="text-red-600 hover:underline">
              ← Back to All Industries
            </Link>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-700">{industry.fullDescription}</p>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Industry Challenges We Solve</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span className="text-gray-700">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industry.solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">{solution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          {industry.caseStudies.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
              <div className="space-y-6">
                {industry.caseStudies.map((study, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{study.client}</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Challenge</h4>
                        <p className="text-sm text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Solution</h4>
                        <p className="text-sm text-gray-700">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Results</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {study.results.map((result, i) => (
                            <li key={i}>• {result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your {industry.title} Logistics?</h3>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Other Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedIndustries.map((relatedIndustry) => (
                <Link
                  key={relatedIndustry.slug}
                  href={`/industries/${relatedIndustry.slug}`}
                  className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-red-600 transition"
                >
                  <div className="text-4xl mb-3">{relatedIndustry.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{relatedIndustry.title}</h4>
                  <p className="text-sm text-gray-600">{relatedIndustry.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
