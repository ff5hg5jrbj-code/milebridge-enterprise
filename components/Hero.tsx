export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {/* Left: Text Content */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-wide">
            Asset-Backed Logistics Partner
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Delivering
            <br />
            <span className="text-blue-600">Efficiency.</span>
            <br />
            Every Mile.
          </h1>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            MileBridge provides SLA-driven FTL and e-commerce logistics with a dedicated fleet and specialized mountain-route expertise.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-blue-700 transition-all uppercase font-bold text-xs md:text-sm text-center shadow-lg"
            >
              Get A Quote
            </a>
            <a 
              href="/services"
              className="bg-white text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-50 transition-all uppercase font-bold text-xs md:text-sm text-center border-2 border-gray-300"
            >
              Our Services
            </a>
          </div>
        </div>
        
        {/* Right: Hero Image */}
        <div className="relative mt-8 md:mt-0">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <img 
              src="/images/hero-truck.jpg"
              alt="MileBridge Logistics Truck" 
              className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
