export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-4 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">120+</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Active Lanes</div>
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">10k+</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Serviceable PINs</div>
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">98.5%</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">On-Time Rate</div>
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">24 hrs</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Quote Turnaround</div>
          </div>
        </div>
      </div>
    </section>
  )
}
