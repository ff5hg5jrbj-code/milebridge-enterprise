import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Last Mile Delivery',
      description: 'Precision last-mile delivery across urban and rural PIN codes with real-time tracking and 98%+ on-time performance.',
      icon: '🚚'
    },
    {
      title: 'Contract Logistics',
      description: 'End-to-end supply chain management with warehousing, inventory optimization, and distribution.',
      icon: '📦'
    },
    {
      title: 'Express Delivery',
      description: 'Same-day and next-day delivery solutions for time-sensitive shipments across major cities.',
      icon: '⚡'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Enterprise-grade logistics solutions for every need
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link href="/services" className="text-red-600 font-semibold hover:text-red-700 hover:underline inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
