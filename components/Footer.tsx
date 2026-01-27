import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Mile<span className="text-red-600">Bridge</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise supply chain & delivery network across India
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition">Last Mile Delivery</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Contract Logistics</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Express Delivery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Email: contact@milebridge.in<br />
              New Delhi, India
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 MileBridge Logistics Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
