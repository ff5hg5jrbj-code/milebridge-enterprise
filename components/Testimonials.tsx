export default function Testimonials() {
  const testimonials = [
    {
      quote: 'MileBridge transformed our supply chain. Their real-time tracking and responsive support have reduced our delivery times significantly. Highly recommended!',
      author: 'Rajesh Kumar',
      title: 'E-Commerce Manager'
    },
    {
      quote: 'The cost savings and efficiency gains we\'ve achieved with MileBridge are remarkable. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sneha Gupta',
      title: 'Supply Chain Director'
    },
    {
      quote: 'Switching to MileBridge was the best decision for our retail operations. Their scalability and flexibility allowed us to grow without operational stress.',
      author: 'Vikram Singh',
      title: 'Operations Head'
    },
    {
      quote: 'Exceptional service and transparent pricing. MileBridge team goes the extra mile to ensure our customers receive their orders on time, every time.',
      author: 'Ananya Mishra',
      title: 'Logistics Coordinator'
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg border-l-4 border-cyan-500">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-slate-900">- {testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}