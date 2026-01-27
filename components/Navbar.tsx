export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            MileBridge
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500 font-semibold">Services</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 font-semibold">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 font-semibold">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
