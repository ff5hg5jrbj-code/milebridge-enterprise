import Link from 'next/link'
import { StatsCounter } from '@/components/StatsCounter'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Original Design with Firefox Fix */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-blue-700 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                MILEBRIDGE LOGISTICS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
                Delivering<br />
                Efficiency.<br />
                Every Mile.
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                MileBridge Logistics is a SLA based PL and E-Commerce Logistics Company with a dedicated infrastructure tailored for smooth operation
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  GET A QUOTE
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white bg-slate-800/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/images/hero-logistics.jpg"
                alt="MileBridge Logistics Truck"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Why Choose Us - Original Design */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bridging Every Mile with<br />
                <span className="text-blue-600">Excellence</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                MileBridge Logistics Private Limited is a pioneering logistics company specializing in express freight, last-mile delivery, and mountain terrain logistics across India.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Asset-Backed Operations</h3>
                    <p className="text-gray-600 text-sm">Own fleet of 40+ vehicles ensuring complete control and reliability</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Mountain Expertise</h3>
                    <p className="text-gray-600 text-sm">Specialized in high-altitude terrain logistics across Jammu & Kashmir</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">99.8% On-Time Delivery</h3>
                    <p className="text-gray-600 text-sm">Industry-leading performance with SLA commitment and real-time tracking</p>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="mt-8 inline-flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold">Happy Clients</div>
                  <div className="text-gray-500">Trusted by leading brands</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/images/mountain-delivery.jpg"
                alt="Mountain Logistics"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Original Cards with Images */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Enterprise Logistics
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              {
                title: "Full Truckload (FTL)",
                category: "FREIGHT SERVICE",
                description: "Complete truck capacity for large shipments with dedicated vehicles and direct delivery across India.",
                image: "/images/service-freight.jpg",
                link: "/services/express-freight"
              },
              {
                title: "E-Commerce Linehaul",
                category: "LAST-MILE",
                description: "Specialized last-mile delivery for e-commerce businesses with 99.8% on-time delivery rate.",
                image: "/images/service-ecommerce.jpg",
                link: "/services/last-mile"
              },
              {
                title: "Contract Fleet",
                category: "CONTRACT LOGISTICS",
                description: "Dedicated fleet management and warehousing solutions for long-term partnerships.",
                image: "/images/service-contract.jpg",
                link: "/services/contract-logistics"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{service.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    REQUEST SERVICE →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Firefox Compatible */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
            Join 500+ businesses that trust MileBridge for reliable, on-time deliveries across India's most challenging terrains.
          </p>
          
          {/* Stats Highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              { value: "99.8%", label: "On-Time Delivery" },
              { value: "500+", label: "Active Clients" },
              { value: "40+", label: "Vehicle Fleet" },
              { value: "10", label: "Delivery Hubs" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-4 border border-blue-500/30">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Request a Quote
            </Link>
            <a
              href="tel:+919560459163"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 9560 459 163
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
