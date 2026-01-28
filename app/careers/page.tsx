'use client'

import { useState } from 'react'

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    setTimeout(() => {
      setSubmitMessage('Application submitted successfully! We will review your application and get back to you soon.')
      setIsSubmitting(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      })
      setSelectedPosition('')
    }, 1000)
  }

  const handleApplyClick = (jobTitle: string) => {
    const positionValue = jobTitle.toLowerCase().replace(/\s+/g, '-')
    setSelectedPosition(positionValue)
    setFormData({ ...formData, position: positionValue })
    
    setTimeout(() => {
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  // Job Listings Data
  const jobListings = [
    {
      title: "Delivery Driver",
      department: "Operations",
      location: "Jammu & Kashmir",
      type: "Full-time",
      description: "Join our fleet of professional drivers delivering excellence across challenging mountain terrains.",
      responsibilities: [
        "Safely operate delivery vehicles across mountain routes",
        "Ensure on-time delivery of packages and freight",
        "Maintain vehicle cleanliness and perform basic maintenance",
        "Provide excellent customer service during deliveries"
      ],
      requirements: [
        "Valid commercial driving license",
        "2+ years driving experience (mountain terrain preferred)",
        "Clean driving record",
        "Physical fitness for loading/unloading"
      ]
    },
    {
      title: "Logistics Coordinator",
      department: "Operations",
      location: "Jammu (Head Office)",
      type: "Full-time",
      description: "Coordinate daily logistics operations and ensure seamless delivery execution.",
      responsibilities: [
        "Plan and optimize delivery routes",
        "Coordinate with drivers and warehouse teams",
        "Track shipments and provide real-time updates",
        "Resolve delivery issues and customer concerns"
      ],
      requirements: [
        "Bachelor's degree in Logistics or related field",
        "1-3 years logistics experience",
        "Strong analytical and problem-solving skills",
        "Proficiency in logistics software and MS Excel"
      ]
    },
    {
      title: "Warehouse Supervisor",
      department: "Warehouse",
      location: "Jammu",
      type: "Full-time",
      description: "Oversee warehouse operations and lead a team for smooth goods handling.",
      responsibilities: [
        "Supervise daily warehouse operations and staff",
        "Manage inventory control and stock accuracy",
        "Coordinate inbound and outbound shipments",
        "Ensure workplace safety compliance"
      ],
      requirements: [
        "3+ years warehouse experience with supervisory role",
        "Knowledge of inventory management systems",
        "Strong leadership skills",
        "Understanding of safety regulations"
      ]
    },
    {
      title: "Fleet Maintenance Technician",
      department: "Maintenance",
      location: "Jammu",
      type: "Full-time",
      description: "Maintain our fleet of 40+ vehicles to ensure optimal performance.",
      responsibilities: [
        "Perform routine vehicle maintenance and inspections",
        "Diagnose and repair mechanical/electrical issues",
        "Maintain detailed service records",
        "Ensure vehicles meet safety standards"
      ],
      requirements: [
        "ITI/Diploma in Automobile Engineering",
        "3+ years commercial vehicle maintenance experience",
        "Strong mechanical and diagnostic skills",
        "Knowledge of modern vehicle systems"
      ]
    },
    {
      title: "Customer Service Representative",
      department: "Support",
      location: "Jammu",
      type: "Full-time",
      description: "Provide exceptional customer support throughout the delivery process.",
      responsibilities: [
        "Handle customer inquiries via phone and email",
        "Track and update shipment status",
        "Resolve complaints and delivery issues",
        "Maintain customer relationship database"
      ],
      requirements: [
        "Graduate in any field",
        "1-2 years customer service experience",
        "Excellent communication in English and Hindi",
        "Computer proficiency and multitasking ability"
      ]
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Jammu & Remote",
      type: "Full-time",
      description: "Drive business growth by acquiring new clients and partnerships.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build relationships with e-commerce and B2B clients",
        "Prepare proposals and negotiate contracts",
        "Achieve monthly sales targets"
      ],
      requirements: [
        "Bachelor's degree in Business or Marketing",
        "2+ years B2B sales experience",
        "Excellent presentation and negotiation skills",
        "Willingness to travel"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Be part of India's fastest-growing logistics company delivering excellence across challenging terrains
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why MileBridge?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Competitive Pay</h3>
              <p className="text-gray-600 text-sm">Industry-leading salaries with performance incentives</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600 text-sm">Training programs and promotion opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600 text-sm">Paid leave and flexible schedules</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Great Team</h3>
              <p className="text-gray-600 text-sm">Collaborative culture with supportive colleagues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Openings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  {job.location}
                </p>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for a Position</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below or send your resume directly to{' '}
              <a href="mailto:hr@milebridge.in" className="text-blue-600 font-semibold hover:underline">
                hr@milebridge.in
              </a>
            </p>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-gray-700 font-semibold mb-2">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select position</option>
                    {jobListings.map((job, idx) => (
                      <option key={idx} value={job.title.toLowerCase().replace(/\s+/g, '-')}>
                        {job.title}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 3 years"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="coverLetter" className="block text-gray-700 font-semibold mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us why you'd be a great fit..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block text-gray-700 font-semibold mb-2">
                  Upload Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-sm text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
