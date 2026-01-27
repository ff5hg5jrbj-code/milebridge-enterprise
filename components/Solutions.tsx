export default function Solutions() {
  const solutions = [
    {
      title: 'FTL Transport',
      description: 'Full truckload shipping for high-volume shipments with nationwide coverage across 150+ cities, ensuring seamless connectivity to all major industrial hubs.'
    },
    {
      title: 'E-commerce Logistics',
      description: 'Streamlined solutions for e-commerce fulfillment with 99.8% on-time delivery rate, ensuring your cargo reaches its destination promptly.'
    },
    {
      title: 'Mountain Route Logistics',
      description: 'Expertise in challenging and remote deliveries including Jammu & Kashmir connections and Ladakh corridor, ensuring reliable service in difficult terrains.'
    },
    {
      title: 'PTL / LTL Shipping',
      description: 'Partial truckload and less-than-truckload options optimized for cost-effective shipping with advanced GPS tracking and IoT sensors.'
    },
    {
      title: 'Dedicated Fleet Services',
      description: 'Exclusive fleet for specific client requirements with light commercial (5-7 tons), medium duty (10-14 tons), and heavy duty (20-24 tons) vehicles.'
    },
    {
      title: 'Contract Logistics',
      description: 'Tailored, end-to-end logistics management with 98.7% SLA compliance and 750+ optimized trips monthly across our pan-India network.'
    }
  ]

  return (
    <section id="solutions" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Comprehensive Logistics Solutions
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
