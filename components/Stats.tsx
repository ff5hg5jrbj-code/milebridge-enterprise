export default function Stats() {
  const stats = [
    { title: 'Technology-enabled operations', icon: '💻' },
    { title: 'Transparent pricing & real-time updates', icon: '📊' },
    { title: 'High operational discipline', icon: '⚡' },
    { title: 'Strong leadership vision', icon: '🎯' }
  ]

  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why MileBridge?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
