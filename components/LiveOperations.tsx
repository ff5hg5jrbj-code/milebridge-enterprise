'use client';
import { useState, useEffect } from 'react';
import { FadeIn, ScaleIn } from './ScrollAnimations';

export default function LiveOperations() {
  const [activeDeliveries, setActiveDeliveries] = useState(247);
  const [distanceCovered, setDistanceCovered] = useState(12847);
  const [onTimeRate, setOnTimeRate] = useState(99.2);
  const [activeVehicles, setActiveVehicles] = useState(38);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuations for realistic feel
      setActiveDeliveries(prev => Math.max(200, Math.min(300, prev + Math.floor(Math.random() * 7) - 3)));
      setDistanceCovered(prev => prev + Math.floor(Math.random() * 50));
      setOnTimeRate(prev => Math.max(98.5, Math.min(99.9, prev + (Math.random() * 0.2 - 0.1))));
      setActiveVehicles(prev => Math.max(30, Math.min(45, prev + Math.floor(Math.random() * 3) - 1)));
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 border-y-4 border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-2 rounded-full text-sm font-bold mb-3 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              LIVE OPERATIONS
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Real-Time Logistics Dashboard
            </h2>
            <p className="text-blue-200 text-sm">Updated every 3 seconds • Data from across India</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Active Deliveries */}
          <ScaleIn delay={0.1}>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center border border-blue-400/50">
                  <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                  </svg>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text font-mono mb-2 transition-all duration-500">
                {activeDeliveries}
              </div>
              <div className="text-sm text-blue-200 font-semibold">Active Deliveries</div>
              <div className="text-xs text-blue-300/70 mt-1">Right Now</div>
            </div>
          </ScaleIn>

          {/* Distance Covered */}
          <ScaleIn delay={0.2}>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center border border-purple-400/50">
                  <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-mono mb-2 transition-all duration-500">
                {distanceCovered.toLocaleString()}
              </div>
              <div className="text-sm text-purple-200 font-semibold">KM Covered</div>
              <div className="text-xs text-purple-300/70 mt-1">Today</div>
            </div>
          </ScaleIn>

          {/* On-Time Rate */}
          <ScaleIn delay={0.3}>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-green-500/30 rounded-xl flex items-center justify-center border border-green-400/50">
                  <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text font-mono mb-2 transition-all duration-500">
                {onTimeRate.toFixed(1)}%
              </div>
              <div className="text-sm text-green-200 font-semibold">On-Time Rate</div>
              <div className="text-xs text-green-300/70 mt-1">This Week</div>
            </div>
          </ScaleIn>

          {/* Active Fleet */}
          <ScaleIn delay={0.4}>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center border border-orange-400/50">
                  <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text font-mono mb-2 transition-all duration-500">
                {activeVehicles}
              </div>
              <div className="text-sm text-orange-200 font-semibold">Active Vehicles</div>
              <div className="text-xs text-orange-300/70 mt-1">On Road</div>
            </div>
          </ScaleIn>
        </div>

        {/* Live Status Bar */}
        <FadeIn delay={0.5}>
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold text-sm">System Status: All Operations Normal</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <span className="text-blue-200 text-sm hidden md:block">Last Updated: Just Now</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
