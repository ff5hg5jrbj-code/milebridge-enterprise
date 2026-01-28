// app/careers/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at MileBridge | Join Our Team',
  description: 'Join MileBridge Logistics and be part of a team revolutionizing logistics across India.',
};

export default function CareersPage() {
  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '📈', title: 'Career Growth', description: 'Clear paths for advancement and development' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive medical insurance for you and family' },
    { icon: '🎓', title: 'Learning & Development', description: 'Continuous training and upskilling programs' },
    { icon: '⚖️', title: 'Work-Life Balance', description: 'Flexible work arrangements and paid time off' },
    { icon: '🎉', title: 'Great Culture', description: 'Collaborative environment with amazing people' },
  ];

  const openings = [
    { title: 'Operations Manager', location: 'Jammu', type: 'Full-time', department: 'Operations' },
    { title: 'Fleet Coordinator', location: 'Srinagar', type: 'Full-time', department: 'Logistics' },
    { title: 'Warehouse Supervisor', location: 'Leh', type: 'Full-time', department: 'Warehousing' },
    { title: 'Delivery Executive', location: 'Multiple Locations', type: 'Full-time', department: 'Last-Mile' },
    { title: 'Technology Engineer', location: 'Remote', type: 'Full-time', department: 'Technology' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Be part of a team revolutionizing logistics across India
          </p>
          <a
            href="#openings"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join MileBridge?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-red-600 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type}</span>
                      <span>🏢 {job.department}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link
                      href="/contact"
                      className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            At MileBridge, we foster a culture of innovation, collaboration, and continuous learning. 
            Join a team of passionate professionals driving change in the logistics industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold">Innovation First</span>
            <span className="bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold">Team Collaboration</span>
            <span className="bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-semibold">Growth Mindset</span>
            <span className="bg-red-100 text-red-800 px-6 py-2 rounded-full font-semibold">Customer Focus</span>
          </div>
        </div>
      </section>
    </>
  );
}
