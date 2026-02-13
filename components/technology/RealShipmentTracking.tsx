'use client'

import { FormEvent, useMemo, useState } from 'react'
import type { ShipmentRecord } from '@/lib/logistics-tech'

interface TrackingResponse {
  success: boolean
  error?: string
  samples?: Array<{ awb: string; orderId: string; destination: string }>
  data?: ShipmentRecord
  notifications?: Array<{
    event: string
    channel: 'whatsapp' | 'sms'
    message: string
    supportsSelfReschedule: boolean
  }>
}

const statusStyles: Record<string, string> = {
  picked_up: 'bg-blue-100 text-blue-700',
  in_transit: 'bg-amber-100 text-amber-700',
  out_for_delivery: 'bg-indigo-100 text-indigo-700',
  delayed: 'bg-red-100 text-red-700',
  delivered: 'bg-emerald-100 text-emerald-700',
}

function formatStatus(status: string) {
  return status.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

function formatEta(iso: string) {
  return new Date(iso).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function RealShipmentTracking() {
  const [query, setQuery] = useState('MBX90871234')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [samples, setSamples] = useState<Array<{ awb: string; orderId: string; destination: string }>>([])
  const [shipment, setShipment] = useState<ShipmentRecord | null>(null)
  const [notifications, setNotifications] = useState<TrackingResponse['notifications']>([])

  const firstAttemptPercent = useMemo(
    () => (shipment ? Math.round(shipment.firstAttemptProbability * 100) : 0),
    [shipment]
  )

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/tracking?query=${encodeURIComponent(query.trim())}`)
      const result = (await response.json()) as TrackingResponse

      if (!response.ok || !result.success) {
        setShipment(null)
        setNotifications([])
        setError(result.error || 'Unable to load shipment details.')
        setSamples(result.samples || [])
        return
      }

      setShipment(result.data || null)
      setNotifications(result.notifications || [])
      setSamples(result.samples || [])
    } catch {
      setError('Unable to connect to tracking services right now.')
      setShipment(null)
      setNotifications([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="real-tracking" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-semibold text-red-700 mb-2">REAL SHIPMENT TRACKING</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Live AWB and Order Visibility</h2>
          <p className="text-gray-600">
            Search by AWB or order reference to view ETA, milestones, current location, and active exception codes.
          </p>
        </div>
      </div>

      <form onSubmit={handleSearch} className="grid md:grid-cols-[1fr_auto] gap-3 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter AWB or Order ID"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 disabled:bg-gray-400"
        >
          {loading ? 'Searching...' : 'Track Shipment'}
        </button>
      </form>

      {error ? (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 text-sm">
          {error}
        </div>
      ) : null}

      {samples.length > 0 ? (
        <div className="mb-6 flex flex-wrap gap-2">
          {samples.map((sample) => (
            <button
              key={sample.awb}
              onClick={() => setQuery(sample.awb)}
              className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 hover:border-red-300 hover:text-red-700"
            >
              {sample.awb}
            </button>
          ))}
        </div>
      ) : null}

      {shipment ? (
        <div className="space-y-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <article className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-red-50/40 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{shipment.awb}</h3>
                  <p className="text-sm text-gray-500">Order: {shipment.orderId}</p>
                </div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                    statusStyles[shipment.status] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {formatStatus(shipment.status)}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-gray-500 mb-1">Route</p>
                  <p className="font-semibold text-gray-900">{shipment.origin}</p>
                  <p className="text-gray-500">to</p>
                  <p className="font-semibold text-gray-900">{shipment.destination}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-gray-500 mb-1">Current Position</p>
                  <p className="font-semibold text-gray-900">{shipment.currentLocation}</p>
                  <p className="text-gray-500 mt-1">
                    {shipment.currentLat.toFixed(2)}, {shipment.currentLng.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-gray-500 mb-1">Projected ETA</p>
                  <p className="font-semibold text-gray-900">{formatEta(shipment.etaIso)}</p>
                  <p className="text-gray-500 mt-1">{shipment.etaMinutes} mins remaining</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-gray-500 mb-1">First Attempt Success Probability</p>
                  <p className="font-semibold text-gray-900">{firstAttemptPercent}%</p>
                  <p className="text-gray-500 mt-1">COD Pending: ₹{(shipment.codAmount - shipment.codCollected).toLocaleString('en-IN')}</p>
                </div>
              </div>

              {shipment.exceptionCode ? (
                <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm">
                  <p className="font-semibold text-amber-800 mb-1">Exception {shipment.exceptionCode}</p>
                  <p className="text-amber-700">{shipment.exceptionReason}</p>
                </div>
              ) : null}
            </article>

            <article className="rounded-2xl border border-gray-200 bg-gray-950 p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Live Map Snapshot</h3>
              <div className="relative h-52 rounded-xl border border-white/20 bg-[radial-gradient(circle_at_30%_30%,rgba(229,34,62,0.45),transparent_45%),linear-gradient(145deg,#0f172a,#1f2937)] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute left-[58%] top-[46%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <span className="absolute -inset-3 rounded-full bg-red-400/30 animate-ping" />
                    <span className="relative inline-flex h-5 w-5 rounded-full bg-red-500 border-2 border-white" />
                  </div>
                </div>
                <p className="absolute left-3 bottom-3 text-xs text-gray-200">Current Node: {shipment.currentLocation}</p>
              </div>
              <p className="text-xs text-gray-300 mt-3">
                Exception reason codes are mapped to lane-specific SOPs for fast escalation and rerouting.
              </p>
            </article>
          </div>

          <article className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Milestones</h3>
            <div className="space-y-3">
              {shipment.milestones.map((item) => (
                <div key={item.code} className="flex items-start gap-3 rounded-lg border border-gray-200 p-3">
                  <span
                    className={`mt-1 inline-flex h-3 w-3 rounded-full ${
                      item.status === 'completed'
                        ? 'bg-emerald-500'
                        : item.status === 'current'
                          ? 'bg-red-500'
                          : 'bg-gray-300'
                    }`}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                    <p className="text-xs text-gray-400">{formatEta(item.timestamp)}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {notifications && notifications.length > 0 ? (
            <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp and SMS Automation Templates</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {notifications.map((item) => (
                  <div key={`${item.event}-${item.channel}`} className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{item.event}</p>
                      <span className="text-xs font-bold uppercase tracking-wide text-red-700">{item.channel}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.message}</p>
                    {item.supportsSelfReschedule ? (
                      <p className="text-xs text-emerald-700 mt-2 font-semibold">Self-reschedule enabled</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}
