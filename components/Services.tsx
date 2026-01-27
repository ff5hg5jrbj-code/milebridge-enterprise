export default function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h1 className="text-6xl font-bold mb-4">
          Delivering Efficiency. Every Mile.
        </h1>
        <p className="text-cyan-300 text-2xl font-semibold mb-6">
          Driving Your Logistics Forward for Over 15 Years
        </p>
        <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
          As a leading logistics provider within India, MileBridge has been committed to delivering reliable and efficient solutions, tailored to the unique needs of our clients.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg">
            Get Started Today
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold transition shadow-lg">
            View Services
          </button>
        </div>
      </div>
    </section>
  )
}
