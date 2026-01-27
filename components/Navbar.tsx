"use client"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            MileBridge
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white font-medium transition">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white font-medium transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium transition">Contact</a>
            <a href="/portal" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold transition">
              Client Portal
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
