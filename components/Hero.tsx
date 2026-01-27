export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Logistics Simplified with MileBridge
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Reliable delivery solutions across India. We bridge the gap between your business and your customers.
        </p>
        <a 
          href="#services" 
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all inline-block"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}
