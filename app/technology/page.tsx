import Image from 'next/image'
import Link from 'next/link'
import TrackingDemo from '@/components/TrackingDemo'

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white py-16 md:py-24 overflow-hidden border-b border-cyan-500/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
            TECHNOLOGY & INNOVATION
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Powered by Advanced Logistics Technology
          </h1>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            Real-time tracking, route optimization, and data-driven insights for seamless deliveries across challenging terrains
          </p>
        </div>
      </section>

      {/* Real-Time Tracking */}
      <section id="gps-tracking" className="py-16 md:py-20 bg-gradient-to-br from-black to-gray-900 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-block bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                REAL-TIME VISIBILITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-6">
                Track Every Shipment in Real-Time
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Our GPS-enabled fleet provides live tracking for complete visibility throughout the delivery journey. Monitor your shipments from pickup to final delivery with minute-by-minute updates.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-100 mb-1">Live GPS Tracking</h3>
                    <p className="text-gray-400 text-sm">Track vehicle location on interactive maps with real-time updates every 30 seconds</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-100 mb-1">ETA Predictions</h3>
                    <p className="text-gray-400 text-sm">AI-powered delivery time estimates accounting for weather, traffic, and terrain</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-100 mb-1">Instant Notifications</h3>
                    <p className="text-gray-400 text-sm">SMS and email alerts for pickup, transit milestones, and delivery completion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Mock Dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 border border-cyan-500/30 shadow-cyan-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  </div>
                  <div className="text-cyan-400 text-sm font-mono">Tracking Dashboard</div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white font-semibold font-mono">Shipment #MB-2026-1234</div>
                    <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs rounded-full font-bold shadow-lg shadow-green-500/50">
                      IN TRANSIT
                    </div>
                  </div>
                  <div className="text-cyan-400/70 text-sm mb-4 font-mono">
                    Jammu → Srinagar | Est. Arrival: 2:30 PM
                  </div>
                  
                  <div className="relative h-2 bg-gray-700 rounded-full mb-4 border border-cyan-500/30">
                    <div className="absolute h-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full shadow-lg" style={{width: '65%', boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)'}}></div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="text-center">
                      <div className="text-green-400 font-bold">✓ Picked Up</div>
                      <div className="text-gray-500">9:00 AM</div>
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-400 font-bold">→ En Route</div>
                      <div className="text-gray-500">Current</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-600">○ Delivery</div>
                      <div className="text-gray-500">2:30 PM</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold font-mono">Vehicle: JK01-AB-1234</div>
                      <div className="text-cyan-400/70 text-sm font-mono">Driver: Rajesh Kumar</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    Live Location: NH44, Near Banihal Tunnel
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-6 top-20 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-xl p-4 border border-green-500/50 backdrop-blur-sm shadow-green-500/30">
                <div className="text-2xl font-bold text-green-400 font-mono">99.2%</div>
                <div className="text-sm text-gray-400 font-mono">On-Time Today</div>
              </div>

              <div className="absolute -left-6 bottom-20 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-xl p-4 border border-cyan-500/50 backdrop-blur-sm shadow-cyan-500/30">
                <div className="text-2xl font-bold text-cyan-400 font-mono">24</div>
                <div className="text-sm text-gray-400 font-mono">Active Shipments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black border-b border-cyan-500/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500/10 border border-blue-500/50 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
              LIVE DEMO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              See Our Technology in Action
            </h2>
            <p className="text-gray-300 text-lg">
              Experience real-time tracking with our interactive shipment simulator
            </p>
          </div>
          
          <TrackingDemo />
        </div>
      </section>

      {/* Route Optimization */}
      <section id="route-optimization" className="py-16 md:py-20 bg-gradient-to-br from-black to-gray-900 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Right - Content (swap order) */}
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white border border-blue-500/30 shadow-xl shadow-blue-500/20">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-mono">Intelligent Route Optimization</h3>
                <p className="text-blue-100 mb-6">
                  Our AI algorithms calculate the most efficient routes considering mountain terrain, weather conditions, and traffic patterns.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-blue-800/30 p-3 rounded-lg border border-blue-500/30">
                    <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <span className="text-white font-bold font-mono">25%</span>
                    </div>
                    <div className="text-blue-100 text-sm">Fuel cost reduction through optimal routing</div>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-800/30 p-3 rounded-lg border border-blue-500/30">
                    <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <span className="text-white font-bold font-mono">30%</span>
                    </div>
                    <div className="text-blue-100 text-sm">Faster deliveries with smart path selection</div>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-800/30 p-3 rounded-lg border border-blue-500/30">
                    <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <span className="text-white font-bold font-mono">40%</span>
                    </div>
                    <div className="text-blue-100 text-sm">Reduced emissions with eco-friendly routes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left - Features */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-purple-500/10 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                SMART LOGISTICS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
                AI-Powered Route Planning
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Navigate through mountain passes, weather challenges, and traffic with intelligent routing that adapts in real-time.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-cyan-100 mb-2">Weather-Adaptive Routing</h3>
                      <p className="text-gray-400 text-sm">Automatically reroutes shipments during snowfall, landslides, or heavy rain in mountain regions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-cyan-100 mb-2">Multi-Stop Optimization</h3>
                      <p className="text-gray-400 text-sm">Calculate the most efficient sequence for multiple deliveries, saving time and fuel costs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-cyan-100 mb-2">Terrain Analysis</h3>
                      <p className="text-gray-400 text-sm">Consider elevation changes, road conditions, and mountain pass accessibility in route planning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Notifications */}
      <section id="notifications" className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-block bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                COMMUNICATION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
                Automated Notifications & Alerts
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Keep everyone informed with instant SMS and email notifications at every stage of the delivery journey. Real-time updates ensure transparency and build customer trust.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-cyan-100 mb-2">SMS Alerts</h3>
                      <p className="text-gray-400 text-sm">Instant text messages for pickup confirmation, transit updates, and delivery completion</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-cyan-100 mb-2">Email Updates</h3>
                      <p className="text-gray-400 text-sm">Detailed email reports with shipment tracking links and delivery documentation</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-cyan-100 mb-2">Exception Alerts</h3>
                      <p className="text-gray-400 text-sm">Immediate notifications for delays, route changes, or delivery exceptions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Mock Notification Panel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-green-500/30 backdrop-blur-sm shadow-xl shadow-green-500/20">
                <div className="space-y-4">
                  {/* SMS Notification */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-green-500 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-500/50">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-cyan-100 font-mono">SMS Alert</div>
                          <div className="text-xs text-gray-500 font-mono">9:00 AM</div>
                        </div>
                        <p className="text-sm text-gray-400">Your shipment #MB-2026-1234 has been picked up from Jammu. Track: milebridge.in/track</p>
                      </div>
                    </div>
                  </div>

                  {/* Email Notification */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-blue-500 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/50">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-cyan-100 font-mono">Email Update</div>
                          <div className="text-xs text-gray-500 font-mono">11:30 AM</div>
                        </div>
                        <p className="text-sm text-gray-400">Shipment in transit. Current location: Banihal Tunnel. ETA: 2:30 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Notification */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-emerald-500 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-500/50">
                        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-cyan-100 font-mono">Delivered ✓</div>
                          <div className="text-xs text-gray-500 font-mono">2:25 PM</div>
                        </div>
                        <p className="text-sm text-gray-400">Successfully delivered to Srinagar. Signed by: Recipient Name</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-white text-center border border-green-500/50 shadow-lg shadow-green-500/30">
                  <div className="text-2xl font-bold font-mono">10,000+</div>
                  <div className="text-sm text-green-100">Daily Notifications Sent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-black to-gray-900 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500/10 border border-blue-500/50 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
              OUR TECH STACK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Built on Cutting-Edge Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-cyan-100 mb-2 font-mono">GPS Tracking</h3>
              <p className="text-gray-400 text-sm">Real-time vehicle location monitoring</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-cyan-100 mb-2 font-mono">Analytics Dashboard</h3>
              <p className="text-gray-400 text-sm">Performance metrics and insights</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-green-500/20 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-bold text-cyan-100 mb-2 font-mono">SMS Alerts</h3>
              <p className="text-gray-400 text-sm">Automated delivery notifications</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-cyan-100 mb-2 font-mono">Web Portal</h3>
              <p className="text-gray-400 text-sm">Customer dashboard access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience Technology-Driven Logistics
          </h2>
          <p className="text-xl text-cyan-100/80 mb-8">
            Get real-time visibility and complete control over your shipments
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/50 hover:scale-105"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
