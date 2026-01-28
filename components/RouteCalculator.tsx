'use client';
import { useState } from 'react';
import { FadeIn, ScaleIn } from './ScrollAnimations';

interface Route {
  from: string;
  to: string;
  distance: number;
  time: string;
  basePrice: number;
}

const routes: Route[] = [
  { from: 'Jammu', to: 'Srinagar', distance: 270, time: '8-9 hours', basePrice: 12000 },
  { from: 'Jammu', to: 'Leh', distance: 434, time: '12-14 hours', basePrice: 22000 },
  { from: 'Srinagar', to: 'Leh', distance: 434, time: '10-12 hours', basePrice: 20000 },
  { from: 'Jammu', to: 'Kargil', distance: 362, time: '10-11 hours', basePrice: 18000 },
  { from: 'Delhi', to: 'Jammu', distance: 590, time: '10-12 hours', basePrice: 15000 },
  { from: 'Delhi', to: 'Srinagar', distance: 876, time: '18-20 hours', basePrice: 25000 },
  { from: 'Chandigarh', to: 'Manali', distance: 310, time: '8-9 hours', basePrice: 10000 },
  { from: 'Chandigarh', to: 'Leh', distance: 1030, time: '22-24 hours', basePrice: 35000 },
];

const cities = ['Select City', 'Delhi', 'Jammu', 'Srinagar', 'Leh', 'Kargil', 'Chandigarh', 'Manali'];

export default function RouteCalculator() {
  const [fromCity, setFromCity] = useState('Select City');
  const [toCity, setToCity] = useState('Select City');
  const [result, setResult] = useState<Route | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateRoute = () => {
    if (fromCity === 'Select City' || toCity === 'Select City') {
      alert('Please select both cities');
      return;
    }

    if (fromCity === toCity) {
      alert('Pickup and delivery cities cannot be the same');
      return;
    }

    // Find route in both directions
    let route = routes.find(r => r.from === fromCity && r.to === toCity);
    if (!route) {
      route = routes.find(r => r.from === toCity && r.to === fromCity);
    }

    if (route) {
      setResult(route);
      setShowResult(true);
    } else {
      // Estimate for routes not in database
      setResult({
        from: fromCity,
        to: toCity,
        distance: 450,
        time: '10-12 hours',
        basePrice: 16000
      });
      setShowResult(true);
    }
  };

  const reset = () => {
    setFromCity('Select City');
    setToCity('Select City');
    setShowResult(false);
    setResult(null);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 text-purple-200 px-4 py-2 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              INSTANT ESTIMATE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Calculate Your Route
            </h2>
            <p className="text-purple-200 text-lg">
              Get instant distance, time, and price estimates for your shipment
            </p>
          </div>
        </FadeIn>

        <ScaleIn delay={0.2}>
          <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            {!showResult ? (
              <>
                {/* Calculator Form */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Pickup City */}
                  <div>
                    <label className="block text-purple-200 font-semibold mb-3 text-sm">
                      📍 PICKUP LOCATION
                    </label>
                    <select
                      value={fromCity}
                      onChange={(e) => setFromCity(e.target.value)}
                      className="w-full bg-gray-800/50 border-2 border-purple-500/30 rounded-xl px-4 py-4 text-white font-semibold focus:border-purple-500 focus:outline-none transition"
                    >
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  {/* Delivery City */}
                  <div>
                    <label className="block text-purple-200 font-semibold mb-3 text-sm">
                      📦 DELIVERY LOCATION
                    </label>
                    <select
                      value={toCity}
                      onChange={(e) => setToCity(e.target.value)}
                      className="w-full bg-gray-800/50 border-2 border-purple-500/30 rounded-xl px-4 py-4 text-white font-semibold focus:border-purple-500 focus:outline-none transition"
                    >
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateRoute}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/50 hover:scale-105"
                >
                  Calculate Route →
                </button>
              </>
            ) : (
              <>
                {/* Results Display */}
                <div className="space-y-6">
                  {/* Route Header */}
                  <div className="text-center pb-6 border-b border-purple-500/30">
                    <div className="text-sm text-purple-300 mb-2 font-mono">ROUTE DETAILS</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text">
                      {result?.from} → {result?.to}
                    </h3>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30 text-center">
                      <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text font-mono mb-2">
                        {result?.distance}
                      </div>
                      <div className="text-sm text-blue-200 font-semibold">KILOMETERS</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 text-center">
                      <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-mono mb-2">
                        {result?.time}
                      </div>
                      <div className="text-sm text-purple-200 font-semibold">EST. TIME</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 text-center">
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text font-mono mb-2">
                        ₹{result?.basePrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-200 font-semibold">BASE PRICE</div>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                    <p className="text-purple-200 text-sm">
                      💡 Final price may vary based on cargo weight, dimensions, and service type
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <button
                      onClick={reset}
                      className="bg-gray-800/50 border-2 border-purple-500/30 text-purple-200 py-3 rounded-xl font-bold hover:bg-gray-700/50 transition"
                    >
                      ← Calculate Another
                    </button>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-bold text-center hover:from-purple-500 hover:to-blue-500 transition shadow-lg shadow-purple-500/50"
                    >
                      Get Accurate Quote →
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </ScaleIn>

        {/* Trust Badges */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="text-purple-200">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs">Support</div>
            </div>
            <div className="text-purple-200">
              <div className="text-2xl font-bold text-white">99.8%</div>
              <div className="text-xs">On-Time</div>
            </div>
            <div className="text-purple-200">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs">Clients</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
