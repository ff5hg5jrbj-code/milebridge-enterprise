export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-cyan-400 font-bold mb-3">About MileBridge</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              MileBridge Logistics Private Limited is a leading integrated supply chain and mobility solutions provider committed to transforming logistics through technology and customer-first approach.
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold mb-3">Contact Us</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>General Inquiries:</strong><br/>
              <a href="mailto:info@milebridge.in" className="hover:text-cyan-400">info@milebridge.in</a><br/><br/>
              <strong>HR & Careers:</strong><br/>
              <a href="mailto:hr@milebridge.in" className="hover:text-cyan-400">hr@milebridge.in</a>
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
          <p className="text-gray-400 mb-2">Â© 2025 MileBridge Logistics Private Limited. All rights reserved.</p>
          <p className="text-gray-500 text-sm mb-3">ðŸ“ Iqbal Abad, Srinagar, Budgam, Jammu & Kashmir - 190015 | ðŸŒ www.milebridge.in</p>
          <p className="text-gray-500 text-sm">Connecting Miles | Delivering Success</p>
        </div>
      </div>
    </footer>
  )
}