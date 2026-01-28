'use client';
import { useState, useEffect } from 'react';

export default function TrackingDemo() {
  const [progress, setProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState('Picked Up');
  const [eta, setEta] = useState(210); // minutes
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate shipment progress
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(false);
          return 100;
        }
        return prev + 0.5;
      });

      setEta((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });

      // Update status based on progress
      if (progress < 30) setCurrentStatus('In Transit - Jawahar Tunnel');
      else if (progress < 60) setCurrentStatus('In Transit - Banihal');
      else if (progress < 90) setCurrentStatus('Out for Delivery');
      else if (progress >= 100) setCurrentStatus('Delivered ✓');
    }, 100);

    return () => clearInterval(interval);
  }, [isAnimating, progress]);

  const startDemo = () => {
    setProgress(0);
    setEta(210);
    setCurrentStatus('Picked Up');
    setIsAnimating(true);
  };

  const resetDemo = () => {
    setProgress(0);
    setEta(210);
    setCurrentStatus('Picked Up');
    setIsAnimating(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Live Tracking Demo</h3>
          <p className="text-blue-200">Watch shipment move in real-time</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={startDemo}
            disabled={isAnimating}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
          >
            {isAnimating ? 'Running...' : 'Start Demo'}
          </button>
          <button
            onClick={resetDemo}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Shipment Card */}
      <div className="bg-gray-800 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white font-semibold">Shipment #MB-DEMO-2026</div>
          <div className={`px-4 py-1 rounded-full text-sm font-semibold ${
            progress >= 100 ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
          }`}>
            {currentStatus}
          </div>
        </div>
        
        <div className="text-gray-400 text-sm mb-4">
          Route: Jammu → Srinagar | Distance: 270 KM
        </div>

        {/* Progress Bar */}
        <div className="relative h-3 bg-gray-700 rounded-full mb-4 overflow-hidden">
          <div 
            className="absolute h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-4 gap-2 text-xs">
          <div className="text-center">
            <div className={`font-semibold mb-1 ${progress > 0 ? 'text-green-400' : 'text-gray-500'}`}>
              ✓ Picked Up
            </div>
            <div className="text-gray-500">Jammu</div>
          </div>
          <div className="text-center">
            <div className={`font-semibold mb-1 ${progress > 30 ? 'text-green-400' : 'text-gray-500'}`}>
              {progress > 30 ? '✓' : '○'} Checkpoint 1
            </div>
            <div className="text-gray-500">Banihal</div>
          </div>
          <div className="text-center">
            <div className={`font-semibold mb-1 ${progress > 70 ? 'text-green-400' : 'text-gray-500'}`}>
              {progress > 70 ? '✓' : '○'} Checkpoint 2
            </div>
            <div className="text-gray-500">Anantnag</div>
          </div>
          <div className="text-center">
            <div className={`font-semibold mb-1 ${progress >= 100 ? 'text-green-400' : 'text-gray-500'}`}>
              {progress >= 100 ? '✓' : '○'} Delivered
            </div>
            <div className="text-gray-500">Srinagar</div>
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-blue-400">{Math.round(progress)}%</div>
          <div className="text-sm text-gray-400 mt-1">Progress</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-green-400">
            {Math.floor(eta / 60)}h {eta % 60}m
          </div>
          <div className="text-sm text-gray-400 mt-1">ETA Remaining</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-purple-400">
            {Math.round((progress / 100) * 270)} KM
          </div>
          <div className="text-sm text-gray-400 mt-1">Distance Covered</div>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="mt-6 bg-gray-800 rounded-xl p-4 flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-white font-semibold">Vehicle: JK01-MB-9876</div>
          <div className="text-gray-400 text-sm">Driver: Ravi Kumar • Contact: +91-XXXX-XXXX</div>
        </div>
        {isAnimating && (
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">LIVE</span>
          </div>
        )}
      </div>
    </div>
  );
}
