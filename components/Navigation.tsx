'use client'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/milebridge-logo.png" 
            alt="MileBridge Logistics"
            style={{height: '200px', width: 'auto'}}
          />
        </div>
        <ul className="flex gap-8 max-md:hidden text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-red-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-red-600 transition">About</a></li>
          <li><a href="#services" className="hover:text-red-600 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-red-600 transition">Contact</a></li>
        </ul>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition">
          Get Quote
        </button>
      </div>
    </nav>
  )
}