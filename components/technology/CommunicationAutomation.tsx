'use client'

import { FormEvent, useState } from 'react'

interface CommunicationDispatch {
  dispatchId: string
  awb: string
  channel: string
  event: string
  message: string
  status: string
  supportsSelfReschedule: boolean
}

interface CommunicationResponse {
  success: boolean
  error?: string
  data?: CommunicationDispatch
}

const eventOptions = [
  { value: 'pickup', label: 'Pickup Confirmed' },
  { value: 'in-transit', label: 'In Transit' },
  { value: 'out-for-delivery', label: 'Out for Delivery' },
  { value: 'delay', label: 'Delayed' },
  { value: 'delivered', label: 'Delivered' },
]

export default function CommunicationAutomation() {
  const [awb, setAwb] = useState('MBX90871234')
  const [event, setEvent] = useState('out-for-delivery')
  const [channel, setChannel] = useState<'whatsapp' | 'sms'>('whatsapp')
  const [rescheduleSlot, setRescheduleSlot] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [dispatch, setDispatch] = useState<CommunicationDispatch | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/communications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ awb, event, channel, rescheduleSlot }),
      })

      const payload = (await response.json()) as CommunicationResponse
      if (!response.ok || !payload.success || !payload.data) {
        setDispatch(null)
        setError(payload.error || 'Unable to queue automation message.')
        return
      }

      setDispatch(payload.data)
    } catch {
      setDispatch(null)
      setError('Unable to queue automation message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="automation" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <p className="text-sm font-semibold text-red-700 mb-2">WHATSAPP + SMS AUTOMATION</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Milestone Messaging and Self-Reschedule</h2>
      <p className="text-gray-600 mb-6">
        Automate customer communications for pickup, in-transit, out-for-delivery, delay, and delivered states with optional self-service slot changes.
      </p>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-4">
          <div>
            <label htmlFor="automation-awb" className="block text-sm font-semibold text-gray-700 mb-1">
              AWB
            </label>
            <input
              id="automation-awb"
              value={awb}
              onChange={(e) => setAwb(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="event" className="block text-sm font-semibold text-gray-700 mb-1">
                Event
              </label>
              <select
                id="event"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {eventOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="channel" className="block text-sm font-semibold text-gray-700 mb-1">
                Channel
              </label>
              <select
                id="channel"
                value={channel}
                onChange={(e) => setChannel(e.target.value as 'whatsapp' | 'sms')}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="whatsapp">WhatsApp</option>
                <option value="sms">SMS</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="slot" className="block text-sm font-semibold text-gray-700 mb-1">
              Optional Reschedule Slot
            </label>
            <input
              id="slot"
              value={rescheduleSlot}
              onChange={(e) => setRescheduleSlot(e.target.value)}
              placeholder="Example: 4 PM - 6 PM"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 disabled:bg-gray-400"
          >
            {loading ? 'Queueing...' : 'Queue Automation Message'}
          </button>

          {error ? <p className="text-sm text-red-700">{error}</p> : null}
        </form>

        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Dispatch Preview</h3>

          {dispatch ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm">
                <p className="text-gray-500">Dispatch ID</p>
                <p className="font-semibold text-gray-900">{dispatch.dispatchId}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="text-gray-500">Event</p>
                  <p className="font-semibold text-gray-900 capitalize">{dispatch.event}</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="text-gray-500">Channel</p>
                  <p className="font-semibold text-gray-900 uppercase">{dispatch.channel}</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="text-gray-500">Status</p>
                  <p className="font-semibold text-emerald-600 uppercase">{dispatch.status}</p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-950 text-white p-4">
                <p className="text-xs uppercase tracking-wide text-gray-300 mb-2">Message Payload</p>
                <p className="text-sm text-gray-100">{dispatch.message}</p>
              </div>

              {dispatch.supportsSelfReschedule ? (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-emerald-800 text-sm">
                  Self-reschedule action is enabled for this event. Customer can request a slot change directly.
                </div>
              ) : null}
            </div>
          ) : (
            <p className="text-sm text-gray-500">Generate an automation payload to preview WhatsApp/SMS output and queue status.</p>
          )}
        </article>
      </div>
    </section>
  )
}
