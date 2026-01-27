export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          Connecting Miles, Delivering Success
        </h1>
        <p className="text-cyan-400 text-2xl font-semibold mb-6">
          Advanced Logistics & Real-Time Delivery Solutions
        </p>
        <p className="text-lg mb-8 text-gray-200">
          We seamlessly integrate smart, tech-enabled logistics solutions for your complex supply chain requirements. Our customer-first approach ensures reliability, transparency, and optimization across all operations.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-full font-bold transition">
          Get Started Today
        </button>
      </div>
    </section>
  )
}