// components/Hero.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <span className="inline-block bg-blue-500/30 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              ASSET-BACKED LOGISTICS PARTNER
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Delivering <span className="text-blue-300">Efficiency.</span><br />
              Every Mile.
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-xl">
              MileBridge provides SLA-driven FTL and e-commerce logistics with a dedicated fleet and specialized mountain-route expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                GET A QUOTE
              </Link>
              <Link 
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold backdrop-blur-sm transition"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>

          {/* Right Image - RESIZED */}
          <div className="relative">
            <div className="relative max-w-xl mx-auto">
              <Image
                src="/images/hero-truck.jpg"
                alt="MileBridge Logistics Truck"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[450px] object-cover rounded-xl md:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
