export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
          MileBridge Logistics
        </div>
        <p className="text-gray-500 mb-6">
          © 2026 MileBridge Logistics Private Limited. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="/privacy" className="hover:text-white transition">Privacy</a>
          <a href="/terms" className="hover:text-white transition">Terms</a>
          <a href="#services" className="hover:text-white transition">Services</a>
        </div>
      </div>
    </footer>
  )
}
