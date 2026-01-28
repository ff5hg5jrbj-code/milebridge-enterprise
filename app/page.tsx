import Link from 'next/link'
import Image from 'next/image'
import { StatsCounter } from '@/components/StatsCounter'
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn } from '@/components/ScrollAnimations'
import dynamic from 'next/dynamic'

// Dynamic imports - loads these components only when needed (Performance Optimization)
const LiveOperations = dynamic(() => import('@/components/LiveOperations'), {
  loading: () => <div className="h-40 bg-gray-900 animate-pulse rounded-xl" />
})

const RouteCalculator = dynamic(() => import('@/components/RouteCalculator'), {
  loading: () => <div className="h-96 bg-gradient-to-br from-indigo-900 to-purple-900 animate-pulse rounded-xl" />
})


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <FadeIn>
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
            </FadeIn>

            {/* Right - Hero Image */}
            <SlideInRight>
              <div className="relative h-80 rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero-logistics.jpg"
                  alt="MileBridge Logistics Fleet"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Live Operations Dashboard */}
      <LiveOperations />

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <SlideInLeft>
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
                  <FadeIn delay={0.2}>
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
                  </FadeIn>

                  <FadeIn delay={0.3}>
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
                  </FadeIn>

                  <FadeIn delay={0.4}>
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
                  </FadeIn>
                </div>
              </div>
            </SlideInLeft>

            {/* Right - Mountain Image with 500+ Badge */}
            <SlideInRight>
              <div className="relative h-96 rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="/images/mountain-route.jpg"
                  alt="Mountain Terrain Logistics"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
                {/* 500+ Active Clients Badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Active Clients</div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-700 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                TECHNOLOGY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powered by Advanced Logistics Technology
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Real-time tracking and AI-powered route optimization for reliable deliveries
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ScaleIn delay={0.1}>
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Live GPS Tracking</h3>
                <p className="text-gray-400 mb-4">
                  Monitor your shipments in real-time with GPS-enabled fleet tracking and instant location updates
                </p>
                <Link href="/technology#gps-tracking" className="text-blue-400 font-semibold hover:text-blue-300">
                  Learn More →
                </Link>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Route Optimization</h3>
                <p className="text-gray-400 mb-4">
                  AI algorithms calculate optimal routes considering terrain, weather, and traffic for faster deliveries
                </p>
                <Link href="/technology#route-optimization" className="text-purple-400 font-semibold hover:text-purple-300">
                  Learn More →
                </Link>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.3}>
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Automated Notifications</h3>
                <p className="text-gray-400 mb-4">
                  Receive instant SMS and email alerts for every shipment milestone from pickup to delivery
                </p>
                <Link href="/technology#notifications" className="text-green-400 font-semibold hover:text-green-300">
                  Learn More →
                </Link>
              </div>
            </ScaleIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/technology"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Explore Our Technology
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Route Calculator */}
      <RouteCalculator />

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for Enterprise Logistics
              </h2>
            </div>
          </FadeIn>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Truckload (FTL)",
                category: "FREIGHT SERVICE",
                description: "Complete truck capacity for large shipments with dedicated vehicles and direct delivery across India.",
                image: "/images/services-ftl.jpg",
                link: "/services/express-freight"
              },
              {
                title: "E-Commerce Linehaul",
                category: "LAST-MILE",
                description: "Specialized last-mile delivery for e-commerce businesses with 99.8% on-time delivery rate.",
                image: "/images/services-ecom.jpg",
                link: "/services/last-mile"
              },
              {
                title: "Contract Fleet",
                category: "CONTRACT LOGISTICS",
                description: "Dedicated fleet management and warehousing solutions for long-term partnerships.",
                image: "/images/services-contract.jpg",
                link: "/services/contract-logistics"
              }
            ].map((service, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Link
                  href={service.link}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={85}
                    />
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
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join 500+ businesses that trust MileBridge for reliable, on-time deliveries across India's most challenging terrains.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Request a Quote
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
