// app/industries/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { industries } from '@/lib/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve | MileBridge Logistics',
  description: 'Specialized logistics solutions for E-Commerce, FMCG, Pharmaceuticals, Automotive, Electronics, and Industrial B2B sectors.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Specialized logistics solutions tailored to your industry's unique challenges
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition group"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4">{industry.shortDescription}</p>
                <span className="text-red-600 font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We work with diverse sectors across India. Contact us to discuss your specific logistics needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
