export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Services
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Enterprise-grade logistics solutions for every need
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <span className="text-2xl font-bold text-white">🚚</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Last Mile Delivery</h3>
          <p className="text-gray-400 mb-6">
            Precision last-mile delivery across urban and rural PIN codes with real-time tracking and 98%+ on-time performance.
          </p>
          <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
            Learn More →
          </a>
        </div>

        {/* Service Card 2 */}
        <div className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <span className="text-2xl font-bold text-white">📦</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">E-commerce Logistics</h3>
          <p className="text-gray-400 mb-6">
            Scalable fulfillment for high-volume e-commerce with automated warehousing, picking, packing and nationwide delivery.
          </p>
          <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
            Learn More →
          </a>
        </div>

        {/* Service Card 3 */}
        <div className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <span className="text-2xl font-bold text-white">🏭</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Warehousing</h3>
          <p className="text-gray-400 mb-6">
            Temperature-controlled warehousing with inventory management, order picking and seamless integration with your ERP systems.
          </p>
          <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  )
}
