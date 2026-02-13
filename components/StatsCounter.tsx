// components/StatsCounter.tsx
'use client';
import dynamic from 'next/dynamic';

interface StatData {
  value: string;
  label: string;
  data: { month: string; value: number }[];
  color: string;
  yAxisDomain: [number, number];
}

const StatLineChart = dynamic(() => import('@/components/StatLineChart'), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-lg bg-slate-700/40" aria-hidden="true" />,
});

const statsData: StatData[] = [
  {
    value: "99.8%",
    label: "ON-TIME DELIVERY",
    color: "#ef4444",
    yAxisDomain: [98, 100],
    data: [
      { month: 'Jul', value: 98.5 },
      { month: 'Aug', value: 99.0 },
      { month: 'Sep', value: 99.3 },
      { month: 'Oct', value: 99.6 },
      { month: 'Nov', value: 99.7 },
      { month: 'Dec', value: 99.8 },
    ]
  },
  {
    value: "99.6%",
    label: "FLEET UPTIME",
    color: "#f97316",
    yAxisDomain: [98, 100],
    data: [
      { month: 'Jul', value: 98.2 },
      { month: 'Aug', value: 98.8 },
      { month: 'Sep', value: 99.0 },
      { month: 'Oct', value: 99.3 },
      { month: 'Nov', value: 99.5 },
      { month: 'Dec', value: 99.6 },
    ]
  },
  {
    value: "0.02%",
    label: "DAMAGE LOSS RATIO",
    color: "#10b981",
    yAxisDomain: [0, 0.1],
    data: [
      { month: 'Jul', value: 0.08 },
      { month: 'Aug', value: 0.06 },
      { month: 'Sep', value: 0.05 },
      { month: 'Oct', value: 0.04 },
      { month: 'Nov', value: 0.03 },
      { month: 'Dec', value: 0.02 },
    ]
  },
  {
    value: "99.9%",
    label: "TRACKING UPTIME",
    color: "#dc2626",
    yAxisDomain: [99, 100],
    data: [
      { month: 'Jul', value: 99.3 },
      { month: 'Aug', value: 99.5 },
      { month: 'Sep', value: 99.6 },
      { month: 'Oct', value: 99.7 },
      { month: 'Nov', value: 99.8 },
      { month: 'Dec', value: 99.9 },
    ]
  },
];

function StatCard({ stat }: { stat: StatData }) {
  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card - FIXED: Solid background instead of transparent for Firefox */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300 shadow-xl">
        
        {/* Top: Number - FIXED: Better text contrast */}
        <div className="mb-4">
          <div className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            {stat.value}
          </div>
          <div className="text-red-300 text-xs md:text-sm font-semibold tracking-wider uppercase">
            {stat.label}
          </div>
        </div>
        
        {/* Chart with proper Y-axis scaling */}
        <div className="h-24 -mx-2">
          <StatLineChart stat={stat} />
        </div>
        
        {/* Trend Indicator */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 text-green-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Trending Up</span>
          </div>
          <span className="text-gray-400">Last 6 months</span>
        </div>
        
        {/* Tech Corner Accent */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: stat.color}}></div>
      </div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(239,68,68,0.26) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
