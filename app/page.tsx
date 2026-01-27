import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Mile<span className="text-red-600">Bridge</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-red-600 transition">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-red-600 transition">About Us</Link>
              <Link href="#why" className="text-gray-700 hover:text-red-600 transition">Why MileBridge</Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</Link>
            </div>
            <div className="flex space-x-3">
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition font-semibold">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900 mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
          alt="Logistics warehouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Connecting Journeys<br />
              <span className="text-red-600">Seamlessly</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Enterprise supply chain & delivery network across India
            </p>
            <div className="flex flex-wrap gap-8 text-white mb-8">
              <div>
                <div className="text-4xl font-bold">120+</div>
                <div className="text-gray-300 text-sm">Active Lanes</div>
              </div>
              <div>
                <div className="text-4xl font-bold">10k+</div>
                <div className="text-gray-300 text-sm">Serviceable PINs</div>
              </div>
              <div>
                <div className="text-4xl font-bold">98.5%</div>
                <div className="text-gray-300 text-sm">On-time Delivery</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition text-lg font-semibold shadow-lg">
                View Services
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition text-lg font-semibold shadow-lg">
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">About MileBridge</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            MileBridge Logistics Private Limited is an enterprise logistics company delivering nationwide 
            with a strong presence in challenging geographies. We combine disciplined ground operations 
            with technology-enabled visibility and service excellence.
          </p>
        </div>
      </section>

      {/* Why MileBridge Section */}
      <section id="why" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why MileBridge?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Technology-enabled operations', icon: '💻' },
              { title: 'Transparent pricing & real-time updates', icon: '📊' },
              { title: 'High operational discipline', icon: '⚡' },
              { title: 'Strong leadership vision', icon: '🎯' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Enterprise-grade logistics solutions for every need
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link href="#" className="text-red-600 font-semibold hover:text-red-700 hover:underline inline-flex items-center">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-md hover:bg-gray-100 transition text-lg font-bold shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                Mile<span className="text-red-600">Bridge</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enterprise supply chain & delivery network across India
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Last Mile Delivery</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contract Logistics</Link></li>
                <li><Link href="#" className="hover:text-white transition">Express Delivery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Email: contact@milebridge.in<br />
                Phone: +91 XXX XXX XXXX
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 MileBridge Logistics Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
