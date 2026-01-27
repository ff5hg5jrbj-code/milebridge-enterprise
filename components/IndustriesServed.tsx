export function IndustriesServed() {
  const industries = ["E-Commerce", "FMCG", "Pharmaceuticals", "Automotive", "Electronics", "Industrial B2B"];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm font-semibold text-blue-700 border border-blue-100">
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
