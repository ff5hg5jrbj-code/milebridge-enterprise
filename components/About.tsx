export default function About() {
  return (
    <section id="about" className="py-20 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About MileBridge
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-8">
              MileBridge Logistics Private Limited is an enterprise logistics company delivering nationwide 
              with a strong presence in challenging geographies. We combine disciplined ground operations 
              with technology‑enabled visibility and service excellence.
            </p>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-400">120+ active lanes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-400">10k+ serviceable PINs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-400">98.5% on-time delivery</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Why MileBridge?</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Technology-enabled operations</li>
              <li>• Transparent pricing & real-time updates</li>
              <li>• High operational discipline</li>
              <li>• Strong leadership vision</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
