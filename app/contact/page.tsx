'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100">We're here to help with your logistics needs</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                title: "Phone",
                content: "+91 9560 459 163",
                link: "tel:+919560459163"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                ),
                title: "Email",
                content: "info@milebridge.in",
                link: "mailto:info@milebridge.in"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Corporate Office",
                content: "Beighpora, Srinagar",
                link: "#"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">{item.title}</div>
                  <div className="text-lg font-semibold text-gray-900">{item.content}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    <option value="contract-logistics">Contract Logistics</option>
                    <option value="express-freight">Express Freight</option>
                    <option value="last-mile">Last Mile Delivery</option>
                    <option value="cross-border">Cross-Border</option>
                    <option value="technology">Technology Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Office Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h3>
                
                {/* Corporate Office */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Corporate Office</h4>
                      <p className="text-gray-600 text-sm">
                        Opposite Al-Azhar Complex, Beighpora<br />
                        Srinagar – 190019, J&K, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Registered Office */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Registered Office</h4>
                      <p className="text-gray-600 text-sm">
                        Iqbal Abad, Mochwa, Nowgam<br />
                        Srinagar – 190015, J&K, India
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      <strong>CIN:</strong> U52240JK2025PTC016880
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Follow Section - UPDATED */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Stay Connected</h3>
                <p className="text-blue-100 mb-4">
                  Follow us on LinkedIn for company updates, job openings, and industry insights.
                </p>
                <a 
                  href="https://www.linkedin.com/company/105953643" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Follow MileBridge
                </a>
              </div>

              {/* Career Email */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Team</h3>
                <p className="text-gray-700 mb-4">
                  Interested in a career with MileBridge? Send your resume to:
                </p>
                <a 
                  href="mailto:hr@milebridge.in" 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  hr@milebridge.in
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Saturday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-500 mt-3">
                    *Emergency logistics support available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
