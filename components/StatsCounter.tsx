// components/StatsCounter.tsx
'use client';
import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis } from 'recharts';

interface StatData {
  value: string;
  label: string;
  data: { month: string; value: number }[];
  color: string;
  yAxisDomain: [number, number];
}

const statsData: StatData[] = [
  {
    value: "99.8%",
    label: "ON-TIME DELIVERY",
    color: "#3b82f6",
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
    color: "#06b6d4",
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
    color: "#8b5cf6",
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
        
        {/* Top: Number */}
        <div className="mb-4">
          <div className="text-5xl md:text-6xl font-bold text-white mb-2">
            {stat.value}
          </div>
          <div className="text-blue-200 text-xs md:text-sm font-semibold tracking-wider uppercase">
            {stat.label}
          </div>
        </div>
        
        {/* Chart with proper Y-axis scaling */}
        <div className="h-24 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stat.data}>
              <defs>
                <linearGradient id={`gradient-${stat.label}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={stat.color} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={stat.color} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <YAxis domain={stat.yAxisDomain} hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0,0,0,0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '12px',
                  padding: '8px 12px'
                }}
                formatter={(value: number) => [`${value}%`, 'Value']}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={stat.color}
                strokeWidth={3}
                dot={{ fill: stat.color, r: 4 }}
                activeDot={{ r: 6, fill: stat.color }}
                fill={`url(#gradient-${stat.label})`}
                animationDuration={2000}
                animationEasing="ease-in-out"
              />
            </LineChart>
          </ResponsiveContainer>
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
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid - NO DUPLICATE HEADING */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
