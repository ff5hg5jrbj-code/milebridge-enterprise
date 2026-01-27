export function StatsCounter() {
  const stats = [
    { label: "On-Time Delivery", value: "99.8%" },
    { label: "Fleet Uptime", value: "99.6%" },
    { label: "Damage Loss Ratio", value: "0.02%" },
    { label: "Tracking Uptime", value: "99.9%" }
  ];
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl font-black mb-1">{s.value}</div>
            <div className="text-blue-300 text-xs uppercase tracking-widest font-bold">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
