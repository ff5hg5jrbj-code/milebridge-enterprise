'use client'

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/milebridge-logo.png" 
            alt="MileBridge Logistics" 
            style={{ height: '200px', width: 'auto' }} 
          />
        </div>
        <ul className="flex gap-8 max-md:hidden text-gray-700 font-medium">
          <li>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-red-600 transition cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-red-600 transition cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-red-600 transition cursor-pointer"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-red-600 transition cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition">
          Get Quote
        </button>
      </div>
    </nav>
  )
}