import Link from 'next/link'
import Image from 'next/image'
import { StatsCounter } from '@/components/StatsCounter'
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn } from '@/components/ScrollAnimations'
import dynamic from 'next/dynamic'
import { getPublicSiteConfig } from '@/lib/public-site-config'

// Dynamic imports - loads these components only when needed (Performance Optimization)
const LiveOperations = dynamic(() => import('@/components/LiveOperations'), {
  loading: () => <div className="h-40 bg-gray-900 animate-pulse rounded-xl" />
})

const RouteCalculator = dynamic(() => import('@/components/RouteCalculator'), {
  loading: () => <div className="h-96 bg-gradient-to-br from-gray-900 to-red-900 animate-pulse rounded-xl" />
})

export default async function Home() {
  const { homepage, featureFlags } = await getPublicSiteConfig()
  const heroTitleLines = [homepage.titleLine1, homepage.titleLine2, homepage.titleLine3].filter(Boolean)

  return (
    <div className="min-h-screen">
      {featureFlags.maintenanceMode ? (
        <section className="bg-amber-100 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 text-sm font-semibold text-amber-800">
            Planned maintenance mode is enabled. Customer-facing flows may be limited.
          </div>
        </section>
      ) : null}

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-[radial-gradient(circle_at_15%_-5%,rgba(229,34,62,0.24),transparent_40%),linear-gradient(135deg,#111827_0%,#1f2937_55%,#374151_100%)]">
        <div className="absolute -top-28 right-[-5rem] h-72 w-72 rounded-full bg-red-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-[-6rem] left-[-3rem] h-80 w-80 rounded-full bg-red-500/25 blur-3xl" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-red-100 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md">
                  {homepage.eyebrow}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
                  {heroTitleLines.map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {line}
                      {index < heroTitleLines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </h1>
                <p className="text-lg text-red-100 mb-8 max-w-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                  {homepage.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={homepage.primaryCtaHref}
                    className="bg-gradient-to-r from-red-500 to-red-400 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-500 transition shadow-xl shadow-red-500/20"
                  >
                    {homepage.primaryCtaLabel}
                  </Link>
                  <Link
                    href={homepage.secondaryCtaHref}
                    className="border border-white/45 bg-slate-900/40 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-900/65 transition backdrop-blur-md"
                  >
                    {homepage.secondaryCtaLabel}
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Right - Hero Image */}
            <SlideInRight>
              <div className="relative h-80 rounded-2xl shadow-2xl shadow-red-950/60 overflow-hidden ring-1 ring-white/20">
                <Image
                  src="/images/hero-logistics.jpg"
                  alt="MileBridge Logistics Fleet delivering across challenging mountain terrains"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
      {featureFlags.showLiveOperations ? <LiveOperations /> : null}

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-red-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <SlideInLeft>
              <div>
                <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  WHY CHOOSE US
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Bridging Every Mile with<br />
                  <span className="text-red-600">Excellence</span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  MileBridge Logistics Private Limited is a pioneering 3PL company specializing in express freight, last-mile delivery, and mountain terrain logistics across India.
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  <FadeIn delay={0.2}>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
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
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
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
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="relative h-96 rounded-2xl shadow-xl overflow-hidden ring-1 ring-red-100/80">
                <Image
                  src="/images/mountain-route.jpg"
                  alt="MileBridge Logistics delivering across mountain terrain in Jammu & Kashmir"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
                {/* 500+ Active Clients Badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center" aria-hidden="true">
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
      {featureFlags.showTechnologyHighlights ? (
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-block bg-red-700 text-red-100 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
                <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition backdrop-blur-sm shadow-lg shadow-red-900/20">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Live GPS Tracking</h3>
                  <p className="text-gray-400 mb-4">
                    Monitor your shipments in real-time with GPS-enabled fleet tracking and instant location updates
                  </p>
                  <Link href="/technology#real-tracking" className="text-red-400 font-semibold hover:text-red-300">
                    Learn More →
                  </Link>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.2}>
                <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition backdrop-blur-sm shadow-lg shadow-red-900/20">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Smart Route Optimization</h3>
                  <p className="text-gray-400 mb-4">
                    AI algorithms calculate optimal routes considering terrain, weather, and traffic for faster deliveries
                  </p>
                  <Link href="/technology#predictive-eta" className="text-orange-400 font-semibold hover:text-orange-300">
                    Learn More →
                  </Link>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.3}>
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition">
                  <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Automated Notifications</h3>
                  <p className="text-gray-400 mb-4">
                    Receive instant SMS and WhatsApp alerts for every shipment milestone
                  </p>
                  <Link href="/technology#automation" className="text-green-400 font-semibold hover:text-green-300">
                    Learn More →
                  </Link>
                </div>
              </ScaleIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="/technology"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
                >
                  Explore Our Technology
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      ) : null}

      {/* Route Calculator */}
      {featureFlags.showRouteCalculator ? <RouteCalculator /> : null}

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-red-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
                  className="bg-white/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm border border-slate-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={`${service.title} - MileBridge Logistics ${service.category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-red-600 font-semibold mb-2">{service.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-red-600 font-semibold">
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
      <section className="py-16 md:py-20 bg-[radial-gradient(circle_at_top_right,rgba(229,34,62,0.24),transparent_40%),linear-gradient(135deg,#111827_0%,#1f2937_100%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Join 500+ businesses that trust MileBridge for reliable, on-time deliveries across India&apos;s most challenging terrains.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
