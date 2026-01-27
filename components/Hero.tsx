export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75" 
        style={{backgroundImage: "url('/hero-logistics.jpg')"}} 
      />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
            Enterprise<br className="hidden lg:block" />
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text">
              Logistics
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-lg max-w-2xl">
            Nationwide supply chain excellence with technology at core. Serving Jammu & Kashmir and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all">
              Our Services
            </a>
            <a href="#contact" className="border-2 border-white px-10 py-4 rounded-xl font-bold text-white hover:bg-white hover:text-gray-900 transition-all">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
