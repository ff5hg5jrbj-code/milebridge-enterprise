export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Full hero image */}
      <div className="absolute inset-0 bg-[url('/hero-truck.jpg')] bg-cover bg-center brightness-50"></div>
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white max-w-lg">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Enterprise<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Logistics
              </span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Nationwide supply chain excellence with technology at core.
            </p>
            <div className="flex gap-4">
              <a href="#services" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600">
                Our Services
              </a>
              <a href="#contact" className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
