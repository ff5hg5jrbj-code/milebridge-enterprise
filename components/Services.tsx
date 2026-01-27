export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Last Mile</h3>
              <p className="text-white/90 mb-4">Precision delivery with 98%+ on-time across PIN codes</p>
              <a href="#contact" className="text-orange-400 font-semibold hover:text-orange-300">Learn More →</a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="h-64 bg-gradient-to-br from-emerald-500 to-teal-600"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Warehousing</h3>
              <p className="text-white/90 mb-4">Temperature-controlled with ERP integration</p>
              <a href="#contact" className="text-orange-400 font-semibold hover:text-orange-300">Learn More →</a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="h-64 bg-gradient-to-br from-orange-500 to-red-500"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Line Haul</h3>
              <p className="text-white/90 mb-4">FTL/PTL across 120+ lanes</p>
              <a href="#contact" className="text-orange-400 font-semibold hover:text-orange-300">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
