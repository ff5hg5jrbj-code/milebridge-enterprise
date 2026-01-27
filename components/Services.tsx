export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose MileBridge</h2>
            <h3 className="text-2xl text-cyan-500 font-semibold mb-6">Excellence Through Technology & People</h3>
            <p className="text-gray-600 mb-6">
              We believe technology revolutionizes logistics. Our integrated approach combines cutting-edge digital platforms with our dedicated team of logistics professionals.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-500 font-bold mr-3">âœ“</span>
                <span className="text-gray-700">End-to-end supply chain visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 font-bold mr-3">âœ“</span>
                <span className="text-gray-700">Real-time response and flexibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 font-bold mr-3">âœ“</span>
                <span className="text-gray-700">Customized solutions for your business</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 font-bold mr-3">âœ“</span>
                <span className="text-gray-700">24/7 customer support team</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 font-bold mr-3">âœ“</span>
                <span className="text-gray-700">Competitive pricing with no hidden costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 font-bold mr-3">âœ“</span>
                <span className="text-gray-700">Scalable solutions for growing businesses</span>
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-full font-bold transition mt-6">
              Learn More
            </button>
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg text-white text-center">
            <div className="text-6xl mb-4">ðŸ“¦</div>
            <p className="text-lg">Trusted by 500+ businesses across India</p>
          </div>
        </div>
      </div>
    </section>
  )
}