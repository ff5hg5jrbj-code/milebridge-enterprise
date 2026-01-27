export default function Solutions() {
  const solutions = [
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your shipments 24/7 with our advanced GPS tracking system. Get instant notifications and complete visibility of your deliveries from origin to destination.'
    },
    {
      title: 'Smart Route Optimization',
      description: 'Reduce delivery times and fuel costs with our AI-powered route optimization. Our algorithms analyze traffic patterns and delivery zones for maximum efficiency.'
    },
    {
      title: 'Green Logistics Initiative',
      description: 'Our eco-friendly delivery fleet and carbon tracking system help you reduce environmental impact while maintaining operational excellence and cost efficiency.'
    }
  ]

  return (
    <section id="solutions" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Solutions That Drive Progress
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-cyan-500 mb-3">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}