import Link from 'next/link'
import { StatsCounter } from '@/components/StatsCounter'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bridging Every Mile,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Delivering Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              India's most reliable logistics partner for express freight, last-mile delivery, and specialized mountain terrain logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Counter - Now with solid backgrounds */}
      <StatsCounter />

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MileBridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with India's most reliable logistics partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Asset-Backed Operations",
                description: "Own fleet of 40+ vehicles ensuring complete control and reliability for your deliveries."
              },
              {
                icon: "🏔️",
                title: "Mountain Logistics Expertise",
                description: "Specialized in high-altitude and challenging terrain deliveries across Jammu & Kashmir."
              },
              {
                icon: "⚡",
                title: "99.8% On-Time Delivery",
                description: "Industry-leading delivery performance with real-time tracking and SLA commitment."
              },
              {
                icon: "🔒",
                title: "Safety & Security",
                description: "0.02% damage ratio with comprehensive insurance and trained delivery professionals."
              },
              {
                icon: "💡",
                title: "Technology-Driven",
                description: "Advanced tracking systems with 99.9% uptime for complete shipment visibility."
              },
              {
                icon: "🤝",
                title: "500+ Happy Clients",
                description: "Trusted by leading e-commerce, FMCG, and pharmaceutical companies across India."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Contract Logistics",
                description: "End-to-end supply chain management with dedicated resources and customized solutions.",
                icon: "📦",
                link: "/services/contract-logistics"
              },
              {
                title: "Express Freight",
                description: "Fast, reliable freight services with guaranteed delivery timelines across India.",
                icon: "⚡",
                link: "/services/express-freight"
              },
              {
                title: "Last Mile Delivery",
                description: "Seamless final-mile delivery to customers with real-time tracking and proof of delivery.",
                icon: "🎯",
                link: "/services/last-mile"
              },
              {
                title: "Cross-Border Logistics",
                description: "International shipping and customs clearance for hassle-free cross-border trade.",
                icon: "🌍",
                link: "/services/cross-border"
              },
              {
                title: "Technology Solutions",
                description: "Advanced logistics technology platform for complete shipment visibility and control.",
                icon: "💻",
                link: "/services/technology"
              },
              {
                title: "Specialized Transport",
                description: "Temperature-controlled and specialized vehicles for pharmaceutical and sensitive cargo.",
                icon: "❄️",
                link: "/services/contract-logistics"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses that trust MileBridge for their delivery needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
