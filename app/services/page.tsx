// app/services/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Logistics Solutions | MileBridge Services',
  description: 'Explore our comprehensive logistics solutions including warehousing, express freight, last-mile delivery, cross-border, and technology platform.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Logistics Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive logistics services powered by technology and operational excellence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <span className="text-red-600 font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
