'use client'

import { FormEvent, useMemo, useState } from 'react'
import type { PredictiveEtaOutput, ShipmentRecord } from '@/lib/logistics-tech'

interface PredictiveEtaResponse {
  success: boolean
  error?: string
  data?: PredictiveEtaOutput
  linkedShipment?: ShipmentRecord
}

const riskStyles: Record<string, string> = {
  low: 'bg-emerald-100 text-emerald-700',
  medium: 'bg-amber-100 text-amber-700',
  high: 'bg-red-100 text-red-700',
}

function minutesToDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}h ${minutes}m`
}

export default function PredictiveEtaPanel() {
  const [form, setForm] = useState({
    awb: 'MBX90871234',
    distanceKm: '210',
    currentDelayMinutes: '20',
    weatherSeverity: '7',
    trafficIndex: '6',
    terrainDifficulty: '8',
    vehicleUtilization: '84',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<PredictiveEtaOutput | null>(null)
  const [linkedShipment, setLinkedShipment] = useState<ShipmentRecord | null>(null)

  const projectedWindow = useMemo(() => {
    if (!result) return ''
    return minutesToDuration(result.projectedEtaMinutes)
  }, [result])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/predictive-eta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          awb: form.awb,
          distanceKm: Number(form.distanceKm),
          currentDelayMinutes: Number(form.currentDelayMinutes),
          weatherSeverity: Number(form.weatherSeverity),
          trafficIndex: Number(form.trafficIndex),
          terrainDifficulty: Number(form.terrainDifficulty),
          vehicleUtilization: Number(form.vehicleUtilization),
        }),
      })

      const payload = (await response.json()) as PredictiveEtaResponse
      if (!response.ok || !payload.success || !payload.data) {
        setResult(null)
        setLinkedShipment(null)
        setError(payload.error || 'Unable to generate predictive ETA right now.')
        return
      }

      setResult(payload.data)
      setLinkedShipment(payload.linkedShipment || null)
    } catch {
      setError('Unable to generate predictive ETA right now.')
      setResult(null)
      setLinkedShipment(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="predictive-eta" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <p className="text-sm font-semibold text-red-700 mb-2">PREDICTIVE ETA + DYNAMIC REROUTING</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Risk Model and Rule Engine</h2>
      <p className="text-gray-600 mb-6">
        Predict ETA drift using weather, traffic, terrain, and utilization signals, then trigger rerouting with measurable recovery time.
      </p>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-4">
          <div>
            <label htmlFor="awb" className="block text-sm font-semibold text-gray-700 mb-1">
              AWB / Order Reference
            </label>
            <input
              id="awb"
              value={form.awb}
              onChange={(e) => setForm((prev) => ({ ...prev, awb: e.target.value }))}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="MBX90871234"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="distance" className="block text-sm font-semibold text-gray-700 mb-1">
                Distance (KM)
              </label>
              <input
                id="distance"
                type="number"
                min={1}
                value={form.distanceKm}
                onChange={(e) => setForm((prev) => ({ ...prev, distanceKm: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="delay" className="block text-sm font-semibold text-gray-700 mb-1">
                Existing Delay (min)
              </label>
              <input
                id="delay"
                type="number"
                min={0}
                value={form.currentDelayMinutes}
                onChange={(e) => setForm((prev) => ({ ...prev, currentDelayMinutes: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="weather" className="block text-sm font-semibold text-gray-700 mb-1">
                Weather Severity (0-10)
              </label>
              <input
                id="weather"
                type="number"
                min={0}
                max={10}
                value={form.weatherSeverity}
                onChange={(e) => setForm((prev) => ({ ...prev, weatherSeverity: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="traffic" className="block text-sm font-semibold text-gray-700 mb-1">
                Traffic Index (0-10)
              </label>
              <input
                id="traffic"
                type="number"
                min={0}
                max={10}
                value={form.trafficIndex}
                onChange={(e) => setForm((prev) => ({ ...prev, trafficIndex: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="terrain" className="block text-sm font-semibold text-gray-700 mb-1">
                Terrain Difficulty (0-10)
              </label>
              <input
                id="terrain"
                type="number"
                min={0}
                max={10}
                value={form.terrainDifficulty}
                onChange={(e) => setForm((prev) => ({ ...prev, terrainDifficulty: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="utilization" className="block text-sm font-semibold text-gray-700 mb-1">
                Vehicle Utilization (%)
              </label>
              <input
                id="utilization"
                type="number"
                min={0}
                max={100}
                value={form.vehicleUtilization}
                onChange={(e) => setForm((prev) => ({ ...prev, vehicleUtilization: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 disabled:bg-gray-400"
          >
            {loading ? 'Predicting...' : 'Run Predictive ETA'}
          </button>

          {error ? <p className="text-sm text-red-700">{error}</p> : null}
        </form>

        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Prediction Output</h3>

          {result ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs text-gray-500 mb-1">Projected ETA</p>
                  <p className="text-2xl font-bold text-gray-900">{projectedWindow}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs text-gray-500 mb-1">Model Confidence</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.round(result.confidence * 100)}%</p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-gray-700">SLA Breach Risk</p>
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyles[result.risk]}`}>
                    {result.risk.toUpperCase()}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {result.reasons.map((reason) => (
                    <li key={reason} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-950 text-white p-4">
                <p className="text-sm font-semibold mb-2">Dynamic Reroute Engine</p>
                <p className="text-sm text-gray-200 mb-2">{result.reroute.alternativeRoute}</p>
                <p className="text-xs text-gray-300 mb-1">Trigger Code: {result.reroute.triggerCode}</p>
                <p className="text-xs text-gray-300">
                  {result.reroute.recommended
                    ? `Expected recovery: ${result.reroute.expectedMinutesSaved} minutes.`
                    : 'No reroute required under current network state.'}
                </p>
              </div>

              {linkedShipment ? (
                <div className="rounded-xl border border-gray-200 bg-red-50 p-3">
                  <p className="text-sm font-semibold text-red-700">Linked Shipment</p>
                  <p className="text-sm text-red-800">
                    {linkedShipment.awb} • {linkedShipment.origin} to {linkedShipment.destination}
                  </p>
                </div>
              ) : null}
            </div>
          ) : (
            <p className="text-sm text-gray-500">Run the model to view projected ETA, risk score, and reroute suggestion.</p>
          )}
        </article>
      </div>
    </section>
  )
}
