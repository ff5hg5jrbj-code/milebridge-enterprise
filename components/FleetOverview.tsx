export default function FleetOverview() {
  const fleet = [
    { type: "Light Commercial", cap: "5-7 TONS", dim: "19-22 FT", app: "Hub-to-Hub, Last Mile" },
    { type: "Medium Duty", cap: "10-14 TONS", dim: "24 FT", app: "Line Haul, Hub-to-Hub" },
    { type: "Heavy Duty", cap: "20-24 TONS", dim: "28-32 FT", app: "Contract Lanes, Bulk" }
  ];
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Versatile Fleet Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((f, i) => (
            <div key={i} className="border p-8 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{f.type}</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Capacity:</strong> {f.cap}</p>
                <p><strong>Dimensions:</strong> {f.dim}</p>
                <p><strong>Applications:</strong> {f.app}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
