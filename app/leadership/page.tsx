// app/leadership/page.tsx
import { Metadata } from 'next';
import { leadership } from '@/lib/team';

export const metadata: Metadata = {
  title: 'Leadership Team | MileBridge Logistics',
  description: 'Meet the leadership team driving innovation and excellence at MileBridge Logistics.',
};

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experienced leaders driving innovation and excellence in logistics
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-900 to-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{leader.role}</p>
                <p className="text-sm text-gray-600 mb-4">{leader.bio}</p>
                {leader.linkedin && (
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline inline-flex items-center gap-2"
                  >
                    <span>Connect on LinkedIn →</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
