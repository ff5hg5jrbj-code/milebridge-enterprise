'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'

interface JobListing {
  title: string
  department: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

const jobListings: JobListing[] = [
  {
    title: 'Delivery Driver',
    department: 'Operations',
    location: 'Jammu & Kashmir',
    type: 'Full-time',
    description:
      'Join our fleet operations team and execute reliable deliveries across regional and mountain routes.',
    responsibilities: [
      'Operate assigned vehicles safely across planned routes.',
      'Complete pickups and deliveries as per run-sheet commitments.',
      'Record delivery status, proof-of-delivery, and route exceptions.',
      'Coordinate with hub teams for load checks and closure updates.',
    ],
    requirements: [
      'Valid commercial driving license.',
      'At least 2 years of commercial driving experience.',
      'Comfort with hilly and long-route operations.',
      'Strong punctuality and professional conduct.',
    ],
  },
  {
    title: 'Logistics Coordinator',
    department: 'Operations',
    location: 'Jammu (Head Office)',
    type: 'Full-time',
    description:
      'Coordinate dispatch plans, monitor service performance, and support daily operations governance.',
    responsibilities: [
      'Prepare route plans and dispatch schedules.',
      'Track active shipments and escalate route exceptions.',
      'Coordinate with hubs, riders, and fleet teams.',
      'Maintain daily service and turnaround reports.',
    ],
    requirements: [
      'Graduate degree in logistics, operations, or a related discipline.',
      '1 to 3 years of logistics operations experience.',
      'Strong communication and problem-solving skills.',
      'Working knowledge of spreadsheets and operational dashboards.',
    ],
  },
  {
    title: 'Warehouse Supervisor',
    department: 'Warehouse',
    location: 'Jammu',
    type: 'Full-time',
    description:
      'Lead warehouse execution with focus on inventory accuracy, dispatch readiness, and team discipline.',
    responsibilities: [
      'Supervise inbound, putaway, pick-pack, and dispatch activities.',
      'Ensure inventory controls and cycle counts are followed.',
      'Manage shift rosters and warehouse productivity.',
      'Enforce workplace safety and compliance standards.',
    ],
    requirements: [
      'At least 3 years of warehouse experience, including team handling.',
      'Knowledge of inventory and warehouse process controls.',
      'Comfort with shift-based operations.',
      'Strong people management and reporting discipline.',
    ],
  },
  {
    title: 'Fleet Maintenance Technician',
    department: 'Maintenance',
    location: 'Jammu',
    type: 'Full-time',
    description:
      'Maintain vehicle uptime through preventive maintenance and timely repair intervention.',
    responsibilities: [
      'Perform routine inspections and maintenance checks.',
      'Diagnose and repair mechanical or electrical issues.',
      'Maintain service records and maintenance logs.',
      'Support compliance and roadworthiness checks.',
    ],
    requirements: [
      'ITI or diploma in automobile engineering or equivalent.',
      'At least 3 years of commercial fleet maintenance experience.',
      'Hands-on diagnostic and repair capability.',
      'Understanding of safety and maintenance SOPs.',
    ],
  },
  {
    title: 'Customer Service Representative',
    department: 'Support',
    location: 'Jammu',
    type: 'Full-time',
    description:
      'Support clients and recipients through timely shipment updates and resolution of service queries.',
    responsibilities: [
      'Respond to shipment-related customer inquiries.',
      'Share delivery milestones and status updates.',
      'Resolve escalations by coordinating with operations teams.',
      'Maintain records of customer interactions and closures.',
    ],
    requirements: [
      'Graduate in any discipline.',
      '1 to 2 years of customer support experience.',
      'Strong spoken and written communication in English and Hindi.',
      'Basic computer proficiency for CRM and tracking tools.',
    ],
  },
  {
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Jammu & Remote',
    type: 'Full-time',
    description:
      'Drive growth by identifying qualified leads and building long-term logistics partnerships.',
    responsibilities: [
      'Generate and manage pipeline opportunities.',
      'Build relationships with e-commerce and B2B accounts.',
      'Create proposals and support contract closures.',
      'Coordinate handover from sales to operations teams.',
    ],
    requirements: [
      'Graduate degree in business, marketing, or a related field.',
      'At least 2 years of B2B sales experience.',
      'Strong presentation and negotiation skills.',
      'Ability to travel for client meetings when required.',
    ],
  },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  })

  const [resumeInputKey, setResumeInputKey] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  const handleApplyClick = (jobTitle: string) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }))
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitStatus('idle')

    try {
      const payload = new FormData()
      payload.append('fullName', formData.fullName)
      payload.append('email', formData.email)
      payload.append('phone', formData.phone)
      payload.append('position', formData.position)
      payload.append('experience', formData.experience)
      payload.append('coverLetter', formData.coverLetter)

      if (formData.resume) {
        payload.append('resume', formData.resume)
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: payload,
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        const error = result?.error || 'Unable to submit your application right now.'
        throw new Error(error)
      }

      setSubmitStatus('success')
      setSubmitMessage('Application submitted successfully. Our hiring team will contact you soon.')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null,
      })
      setResumeInputKey((prev) => prev + 1)
    } catch (error) {
      setSubmitStatus('error')
      const message = error instanceof Error ? error.message : 'Unable to submit your application right now.'
      setSubmitMessage(`${message} You can also email your resume to hr@milebridge.in.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="CAREERS"
        title="Build Your Career with MileBridge"
        description="Join a fast-scaling logistics team where operational discipline, ownership, and customer impact drive every role."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Why Join MileBridge</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-red-50/60 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Culture</h3>
              <p className="text-gray-600 text-sm">Work in a team that values accountability, speed, and execution quality.</p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-red-50/60 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth Pathways</h3>
              <p className="text-gray-600 text-sm">Build skills through hands-on operations exposure and structured responsibilities.</p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-red-50/60 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real Impact</h3>
              <p className="text-gray-600 text-sm">Contribute to high-volume delivery operations that directly impact customer outcomes.</p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-red-50/60 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Team Environment</h3>
              <p className="text-gray-600 text-sm">Collaborate with experienced operators across fleet, warehouse, and service teams.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-red-50/60 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Current Openings</h2>

          <div className="grid md:grid-cols-2 gap-7">
            {jobListings.map((job) => (
              <article key={job.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold">
                    {job.department}
                  </span>
                  <span className="inline-flex rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-semibold">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{job.location}</p>
                <p className="text-gray-700 mb-5">{job.description}</p>

                <div className="mb-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities</h4>
                  <ul className="space-y-1.5">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="space-y-1.5">
                    {job.requirements.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="w-full rounded-lg bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition"
                >
                  Apply for {job.title}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Apply for a Position</h2>
            <p className="text-gray-600 mb-8">
              Complete the form below or email your resume to{' '}
              <a href="mailto:hr@milebridge.in" className="text-red-600 font-semibold hover:text-red-700">
                hr@milebridge.in
              </a>
              .
            </p>

            {submitMessage ? (
              <div
                className={`mb-6 rounded-lg border p-4 text-sm ${
                  submitStatus === 'success'
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}
              >
                {submitMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobListings.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="Example: 3 years"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us why you are a strong fit for this role."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Resume *
                </label>
                <input
                  key={resumeInputKey}
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent file:mr-4 file:rounded-md file:border-0 file:bg-red-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-red-700 hover:file:bg-red-100"
                />
                <p className="mt-2 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB.</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </article>
        </div>
      </section>
    </div>
  )
}
