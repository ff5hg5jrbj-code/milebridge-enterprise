'use client'

export default function Navigation() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Mile<span className="text-cyan-400">Bridge</span>
        </div>
        <ul className="flex gap-8 max-md:hidden">
          <li><a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a></li>
          <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
          <li><a href="#team" className="hover:text-cyan-400 transition">Team</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}