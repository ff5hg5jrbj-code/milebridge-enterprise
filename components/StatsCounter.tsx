'use client'
import React from 'react'

export function StatsCounter() {
  const stats = [
    { 
      label: "On-Time Delivery", 
      value: "99.8%",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    { 
      label: "Fleet Uptime", 
      value: "99.6%",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    { 
      label: "Damage Loss Ratio", 
      value: "0.02%",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    { 
      label: "Tracking Uptime", 
      value: "99.9%",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    }
  ]

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group text-center transform transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                  <svg 
                    className="w-8 h-8 text-blue-200 group-hover:text-white transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d={stat.icon}
                    />
                  </svg>
                </div>
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-200 transition-colors">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
