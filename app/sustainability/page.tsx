// app/sustainability/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability & ESG | MileBridge Logistics',
  description: 'Our commitment to sustainable logistics, green fleet initiatives, and environmental responsibility.',
};

export default function SustainabilityPage() {
  const initiatives = [
    { icon: '🔋', title: 'Electric Fleet', stat: '30%', description: 'of our urban fleet is electric' },
    { icon: '🌱', title: 'Carbon Reduction', stat: '40%', description: 'reduction in emissions since 2023' },
    { icon: '♻️', title: 'Green Warehouses', stat: '5', description: 'LEED-certified facilities' },
    { icon: '☀️', title: 'Solar Power', stat: '2 MW', description: 'of solar capacity installed' },
  ];

  const commitments = [
    '100% electric fleet in metro cities by 2027',
    'Carbon neutral operations by 2030',
    'Zero waste to landfill by 2028',
    'Sustainable packaging across all operations',
    'Partner with eco-conscious suppliers',
    'Employee sustainability training programs',
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🌍</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainability & ESG</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building a greener future through sustainable logistics practices
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Green Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-5xl mb-4">{initiative.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{initiative.stat}</div>
                <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitments</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-green-600 font-bold text-xl">🌿</span>
                  <span className="text-gray-700 text-lg">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Making a Real Impact</h2>
          <p className="text-xl text-gray-600">
            Every delivery we make is a step toward a more sustainable future. 
            Join us in building environmentally responsible logistics.
          </p>
        </div>
      </section>
    </>
  );
}
