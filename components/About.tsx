import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wide">
              About MileBridge
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Bridging Every Mile with{' '}
              <span className="text-blue-600">Excellence</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              MileBridge Logistics Private Limited is an enterprise logistics company delivering 
              nationwide with a strong presence in challenging geographies.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Nationwide Reach</h3>
                  <p className="text-gray-600 text-sm">Comprehensive coverage across India&apos;s diverse terrain</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Mountain Expertise</h3>
                  <p className="text-gray-600 text-sm">Specialized in challenging high-altitude routes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Asset-Backed Fleet</h3>
                  <p className="text-gray-600 text-sm">Owned fleet ensuring reliability and control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-logistics.jpg"
                alt="MileBridge Operations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">500+</div>
                  <div className="text-xs text-gray-600 font-semibold">Active Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
