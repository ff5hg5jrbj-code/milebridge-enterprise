"use client"

export default function Hero() {
  return (
    <section className="py-20">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-700">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          MileBridge Logistics
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Enterprise supply chain & delivery network across India
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold text-center">
            View Services
          </a>
          <a href="#contact" className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full text-gray-200 font-semibold text-center">
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
