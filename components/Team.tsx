export default function Team() {
  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      quote: 'Our mission is to redefine logistics in India by combining cutting-edge technology with unwavering customer commitment and operational excellence.'
    },
    {
      name: 'Priya Desai',
      role: 'Operations Director',
      quote: 'Every delivery is a promise. We ensure that our team delivers not just packages, but reliability, trust, and consistent value to every customer.'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Lead',
      quote: 'Innovation drives logistics transformation. Our tech platform enables real-time optimization, reducing costs while improving delivery experience.'
    },
    {
      name: 'Neha Verma',
      role: 'Customer Success Manager',
      quote: 'Customer satisfaction is our north star. We work closely with every partner to understand their needs and deliver tailored logistics solutions.'
    }
  ]

  return (
    <section id="team" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Our Dedicated Team</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We are a people-driven organization with dedicated professionals who come to work every day to ensure that our deliveries and services meet the highest standards.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-cyan-500 font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 italic text-sm">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}