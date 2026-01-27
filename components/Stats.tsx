export default function Stats() {
  const stats = [
    { number: '500+', label: 'Active Clients' },
    { number: '50K+', label: 'Deliveries Monthly' },
    { number: '98%', label: 'On-Time Delivery Rate' },
    { number: '24/7', label: 'Customer Support' }
  ]

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}