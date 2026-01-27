export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/milebridge-logo.png" 
              alt="MileBridge Logo" 
              className="h-64 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              MileBridge Logistics Private Limited is a leading integrated supply chain and mobility solutions provider with over 15 years of experience.
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-3">Contact Us</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Email:</strong><br/>
              <a href="mailto:info@milebridge.in" className="hover:text-cyan-400">info@milebridge.in</a><br/><br/>
              <strong>Phone:</strong><br/>
              <a href="tel:+918899829936" className="hover:text-cyan-400">+91 88998 2936</a>
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-3">Company Details</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>CIN:</strong> U52240JK2025PTC016880<br/>
              <strong>GST:</strong> 01AASCM8905F1ZE<br/>
              <strong>PAN:</strong> AASCM8905F<br/>
              <strong>TAN:</strong> AMRM17034D
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-2">© 2025 MileBridge Logistics Private Limited. All rights reserved.</p>
          <p className="text-gray-500 text-sm mb-3">📍 Iqbal Abad, Srinagar, Budgam, Jammu & Kashmir - 190015 | 🌐 www.milebridge.in</p>
          <p className="text-gray-500 text-sm">Delivering Efficiency. Every Mile.</p>
        </div>
      </div>
    </footer>
  )
}
