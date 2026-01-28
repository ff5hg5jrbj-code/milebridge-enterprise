// app/technology/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alyte Technology Platform | MileBridge Logistics',
  description: 'Advanced logistics technology platform with real-time tracking, AI-powered analytics, and seamless integrations.',
};

export default function TechnologyPage() {
  const features = [
    { icon: '📍', title: 'Real-Time GPS Tracking', description: 'Track every shipment with live GPS updates and geofencing capabilities' },
    { icon: '🤖', title: 'AI-Powered Analytics', description: 'Predictive insights and intelligent route optimization' },
    { icon: '📊', title: 'Advanced Dashboard', description: 'Comprehensive visibility into all logistics operations' },
    { icon: '🔔', title: 'Smart Notifications', description: 'Automated alerts for shipment updates and exceptions' },
    { icon: '🔗', title: 'API Integration', description: 'Seamlessly connect with your existing systems' },
    { icon: '📱', title: 'Mobile App', description: 'Manage logistics on-the-go with our mobile application' },
  ];

  const capabilities = [
    'Real-time shipment tracking across all modes',
    'Automated route optimization and planning',
    'Warehouse management integration',
    'Electronic proof of delivery',
    'Invoice and billing automation',
    'Performance analytics and reporting',
    'Customer portal for self-service',
    'Multi-language support',
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alyte Technology Platform</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Cutting-edge logistics technology for complete supply chain visibility and control
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Logistics Operations</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how Alyte can revolutionize your supply chain management
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
