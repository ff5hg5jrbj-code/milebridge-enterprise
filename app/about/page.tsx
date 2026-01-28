import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-700 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ABOUT US
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bridging Every Mile with Excellence
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            MileBridge Logistics Private Limited is an enterprise logistics company delivering nationwide with a strong presence in challenging geographies.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in January 2025, MileBridge Logistics was built from the ground up with a clear vision: to deliver reliable, efficient logistics solutions across India's most challenging terrains.
              </p>
              
              <p>
                Under the leadership of Sahil Fayaz, who brings nearly a decade of logistics expertise from industry leaders like Amazon DSP and Delhivery, MileBridge has rapidly expanded to operate 10 delivery hubs across Jammu & Kashmir, managing a fleet of 40+ vehicles and employing over 500 dedicated professionals.
              </p>
              
              <p>
                Our commitment to operational excellence, technology-driven solutions, and customer-first service has enabled us to achieve ₹2.16 Cr in annual revenue while maintaining industry-leading SLA compliance and delivery performance metrics.
              </p>

              <p>
                Today, MileBridge Logistics stands as a trusted logistics partner for 500+ active clients, specializing in express freight, last-mile delivery, and mountain terrain logistics. We combine asset-backed operations with cutting-edge technology to ensure every shipment reaches its destination safely and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide enterprise-grade logistics solutions that connect businesses across India, with special focus on serving challenging geographies and frontier markets. We aim to deliver operational excellence through technology-enabled infrastructure and customer-first service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted logistics partner for mountain terrain and last-mile delivery, expanding our network to serve every corner of the nation while maintaining our commitment to reliability, innovation, and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - WITH IMAGES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              MileBridge Logistics provides comprehensive logistics solutions tailored for enterprise clients and e-commerce businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src="/images/services-ftl.jpg"
                  alt="Express Freight Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Express Freight</h3>
                <p className="text-gray-600 mb-4">Full truckload (FTL) services for large shipments with dedicated vehicles across India</p>
                <Link href="/services/express-freight" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src="/images/services-ecom.jpg"
                  alt="Last-Mile Delivery Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Last-Mile Delivery</h3>
                <p className="text-gray-600 mb-4">E-commerce linehaul and last-mile solutions with 99.8% on-time delivery rate</p>
                <Link href="/services/last-mile" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src="/images/services-contract.jpg"
                  alt="Contract Logistics Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contract Logistics</h3>
                <p className="text-gray-600 mb-4">Dedicated fleet management and warehousing for long-term partnerships</p>
                <Link href="/services/contract-logistics" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MileBridge By Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">10+</div>
              <div className="text-blue-100">Delivery Hubs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-blue-100">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">40+</div>
              <div className="text-blue-100">Vehicle Fleet</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">99.8%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              LEADERSHIP
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Sahil Fayaz Leadership Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Photo */}
                <div className="relative w-48 h-48 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-blue-200">
                  <Image
                    src="/images/sahil-fayaz.jpg"
                    alt="Sahil Fayaz"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Sahil Fayaz</h3>
                  <p className="text-blue-600 font-semibold text-xl mb-4">Director & Founder</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Logistics and operations leader with 9+ years of experience building and scaling large-scale last-mile delivery networks across Amazon DSP, Delhivery, FastBeetle, and MileBridge Logistics. Proven expertise in multi-location hub management, fleet optimization, workforce scaling, and full P&L ownership.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-3xl font-bold text-blue-600">10+</div>
                      <div className="text-sm text-gray-600 mt-1">Delivery Hubs</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-3xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-600 mt-1">Employees</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-3xl font-bold text-blue-600">40+</div>
                      <div className="text-sm text-gray-600 mt-1">Vehicle Fleet</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-3xl font-bold text-blue-600">₹2.16Cr</div>
                      <div className="text-sm text-gray-600 mt-1">Annual Revenue</div>
                    </div>
                  </div>

                  <p className="text-gray-600 italic border-l-4 border-blue-600 pl-4">
                    "Specialized in building high-performance logistics infrastructure in Tier-2 and frontier markets with proven track record of operational excellence and workforce leadership."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every mile we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">Consistent on-time delivery with 99.8% performance rate and strict SLA adherence</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">Service excellence driving satisfaction across 500+ active clients nationwide</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Technology-driven solutions for complex logistics challenges in frontier markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Network
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with MileBridge for reliable logistics solutions across India's most challenging terrains
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  )
}
