export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Move with MileBridge?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Get a custom quote for your logistics needs in 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:info@milebridge.in" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/20 transition">
            Get Quote →
          </a>
          <a href="tel:+919999999999" className="border-2 border-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
            Call Now
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          info@milebridge.in | +91 99999 99999 | Faridabad, Haryana
        </p>
      </div>
    </section>
  )
}
