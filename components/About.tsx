export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About MileBridge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MileBridge Logistics Private Limited is an enterprise logistics company delivering nationwide with a strong presence in challenging geographies. We combine disciplined ground operations with technology-enabled visibility and service excellence.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Why MileBridge?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">🖥️</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Technology-enabled operations</h4>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Transparent pricing & real-time updates</h4>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">High operational discipline</h4>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Strong leadership vision</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
