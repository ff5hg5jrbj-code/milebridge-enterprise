import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - MileBridge Logistics',
  description: 'Learn about MileBridge Logistics - Your trusted partner in logistics excellence',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About MileBridge</h1>
            <p className="text-xl text-blue-100">
              Bridging distances, delivering excellence across India's most challenging terrains
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                OUR STORY
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for India's Toughest Routes
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  MileBridge Logistics Private Limited emerged from a clear vision: to provide 
                  reliable, efficient logistics solutions across India's diverse and challenging geography.
                </p>
                <p>
                  With specialized expertise in mountain routes and high-altitude logistics, we've 
                  built a reputation for delivering where others can't. Our asset-backed approach 
                  ensures complete control and reliability.
                </p>
                <p>
                  Today, we serve 500+ active clients with a 99.8% on-time delivery rate, 
                  proving that excellence knows no terrain.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/hero-logistics.jpg" 
                alt="MileBridge Operations" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide SLA-driven, technology-enabled logistics solutions that empower 
                businesses to reach every corner of India with confidence and reliability.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-600">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be India's most trusted logistics partner, setting benchmarks in 
                reliability, innovation, and customer satisfaction across all terrains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that drive everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Reliability",
                description: "99.8% on-time delivery isn't just a metric - it's our commitment to your business."
              },
              {
                icon: "🔒",
                title: "Safety First",
                description: "0.02% damage ratio through rigorous safety protocols and trained professionals."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Technology-driven solutions with 99.9% tracking uptime for complete visibility."
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "We don't just deliver goods - we build lasting relationships with our clients."
              },
              {
                icon: "🏔️",
                title: "Expertise",
                description: "Specialized knowledge in mountain logistics and challenging terrain navigation."
              },
              {
                icon: "⚡",
                title: "Efficiency",
                description: "Optimized routes and dedicated fleet for faster, more reliable deliveries."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR TEAM
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">The minds driving MileBridge forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sahil Fayaz - Director - FIXED IMAGE SIZE */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              {/* Image - Better cropped for professional headshot */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
                <img 
                  src="/images/sahil-fayaz.jpg"
                  alt="Sahil Fayaz - Founder & Director, MileBridge Logistics"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sahil Fayaz</h3>
                <p className="text-blue-600 font-semibold mb-3">Founder & Director</p>
                
                {/* Key Highlights */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>9+ years in logistics operations</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Built MileBridge from inception</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Led operations at Amazon DSP, Delhivery, FastBeetle</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Managing 500+ employees & 40+ vehicle fleet</span>
                  </div>
                </div>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                    Last-Mile Logistics
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                    P&L Ownership
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                    Fleet Optimization
                  </span>
                </div>
                
                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/sahil-bhatt121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Placeholder for future team members */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-gray-300">
              <div className="h-80 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-sm">Leadership Team Member</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm">Position available for key leadership role</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-gray-300">
              <div className="h-80 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-sm">Leadership Team Member</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm">Position available for key leadership role</p>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-gray-600">Delivery Hubs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Vehicle Fleet</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">9+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses that trust MileBridge for their logistics needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition text-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
