import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Logistics?
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Get in touch with our team to discuss your requirements
        </p>
        <Link href="/contact">
          <button className="bg-white text-red-600 px-8 py-4 rounded-md hover:bg-gray-100 transition text-lg font-bold shadow-lg">
            Contact Us Today
          </button>
        </Link>
      </div>
    </section>
  )
}
