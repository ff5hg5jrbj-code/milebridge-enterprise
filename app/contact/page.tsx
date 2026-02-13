'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'

const serviceOptions = [
  { value: 'contract-logistics', label: 'Contract Logistics & Warehousing' },
  { value: 'express-freight', label: 'Express & Freight Solutions' },
  { value: 'last-mile', label: 'Last-Mile Delivery' },
  { value: 'cross-border', label: 'Cross-Border & International' },
  { value: 'technology', label: 'Alyte Technology Platform' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitStatus('idle')

    const selectedService = serviceOptions.find((item) => item.value === formData.service)

    const details = [
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.company ? `Company: ${formData.company}` : '',
      selectedService ? `Service Interest: ${selectedService.label}` : '',
    ].filter(Boolean)

    const message = details.length > 0 ? `${formData.message}\n\n${details.join('\n')}` : formData.message

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message,
        }),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        throw new Error(result?.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setSubmitMessage('Thank you. Our team will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('Unable to send your message right now. Please try again or email info@milebridge.in.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="CONTACT"
        title="Let&apos;s Build Your Logistics Plan"
        description="Share your volume profile, service needs, and delivery footprint. Our team will respond with a practical execution approach."
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-red-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fields marked with * are required.</p>

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
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your shipment volume, delivery locations, and SLA expectations."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            </article>

            <aside className="space-y-5">
              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <span className="text-sm font-semibold text-gray-500 block">General Inquiries</span>
                    <a className="text-red-600 font-semibold hover:text-red-700" href="mailto:info@milebridge.in">
                      info@milebridge.in
                    </a>
                  </li>
                  <li>
                    <span className="text-sm font-semibold text-gray-500 block">Careers</span>
                    <a className="text-red-600 font-semibold hover:text-red-700" href="mailto:hr@milebridge.in">
                      hr@milebridge.in
                    </a>
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Office Address</h3>
                <p className="text-gray-700 leading-relaxed">
                  Beighpora, Srinagar - 190019
                  <br />
                  Jammu & Kashmir, India
                </p>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-gray-900 text-white p-6">
                <h3 className="text-xl font-bold mb-3">Response Timeline</h3>
                <p className="text-gray-300">
                  Most business inquiries are acknowledged within one working day with next-step actions from our operations team.
                </p>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
