'use client'

import { useEffect, useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { ControlTowerSnapshot, IntegrationReadiness } from '@/lib/logistics-tech'

interface ControlTowerResponse {
  success: boolean
  data?: ControlTowerSnapshot
  readinessSummary?: IntegrationReadiness[]
}

const riskStyle: Record<string, string> = {
  low: 'bg-emerald-100 text-emerald-700',
  medium: 'bg-amber-100 text-amber-700',
  high: 'bg-red-100 text-red-700',
}

function formatCurrency(value: number) {
  return `₹${value.toLocaleString('en-IN')}`
}

export default function ControlTowerDashboard() {
  const [snapshot, setSnapshot] = useState<ControlTowerSnapshot | null>(null)
  const [integrationSummary, setIntegrationSummary] = useState<IntegrationReadiness[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('/api/control-tower')
        const result = (await response.json()) as ControlTowerResponse

        if (!response.ok || !result.success || !result.data) {
          setError('Unable to load control tower metrics right now.')
          return
        }

        setSnapshot(result.data)
        setIntegrationSummary(result.readinessSummary || [])
      } catch {
        setError('Unable to load control tower metrics right now.')
      }
    }

    void load()
  }, [])

  const hubChart = useMemo(
    () =>
      snapshot?.hubs.map((item) => ({
        hub: item.hub.replace(/\sHub$/, ''),
        firstAttemptSuccess: item.firstAttemptSuccess,
        utilization: item.utilization,
      })) || [],
    [snapshot]
  )

  return (
    <section id="control-tower" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <p className="text-sm font-semibold text-red-700 mb-2">CONTROL TOWER DASHBOARD</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">SLA Risk, Hub Performance, and COD Reconciliation</h2>
      <p className="text-gray-600 mb-6">
        Unified operations view for breach risk, delayed lanes, hub throughput, first-attempt success, and COD closure.
      </p>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 text-sm">{error}</div> : null}

      {snapshot ? (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Active Shipments</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{snapshot.kpis.activeShipments}</p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Delayed Shipments</p>
              <p className="text-3xl font-bold text-red-600 mt-2">{snapshot.kpis.delayedShipments}</p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">SLA Risk Cases</p>
              <p className="text-3xl font-bold text-amber-600 mt-2">{snapshot.kpis.slaBreachRiskShipments}</p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Attempt</p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">{snapshot.kpis.firstAttemptSuccess}%</p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">COD Reconciled</p>
              <p className="text-3xl font-bold text-indigo-600 mt-2">{snapshot.kpis.codReconciledPercent}%</p>
            </article>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-4">On-Time Trend vs SLA Risk Cases</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={snapshot.dailyTrend} margin={{ top: 5, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <YAxis yAxisId="left" tick={{ fill: '#6b7280', fontSize: 12 }} domain={[90, 100]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="onTimeRate" stroke="#e5223e" strokeWidth={2.5} />
                    <Line yAxisId="right" type="monotone" dataKey="slaRiskCases" stroke="#1f2937" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Hub Utilization and First-Attempt Success</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hubChart} margin={{ top: 5, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="hub" tick={{ fill: '#6b7280', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="firstAttemptSuccess" fill="#e5223e" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="utilization" fill="#1f2937" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <article className="rounded-2xl border border-gray-200 bg-white p-5 overflow-x-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lane Risk Board</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="pb-2">Lane</th>
                    <th className="pb-2">Volume</th>
                    <th className="pb-2">On-Time</th>
                    <th className="pb-2">Avg Delay</th>
                    <th className="pb-2">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {snapshot.lanes.map((lane) => (
                    <tr key={lane.lane} className="border-b border-gray-100 last:border-0">
                      <td className="py-2 text-gray-800 font-medium">{lane.lane}</td>
                      <td className="py-2 text-gray-600">{lane.volume}</td>
                      <td className="py-2 text-gray-600">{lane.onTimeRate}%</td>
                      <td className="py-2 text-gray-600">{lane.averageDelayMinutes} min</td>
                      <td className="py-2">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyle[lane.slaBreachRisk]}`}>
                          {lane.slaBreachRisk.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-gray-900 text-white p-5">
              <h3 className="text-lg font-bold mb-4">COD Reconciliation</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-white/15 pb-2">
                  <span className="text-gray-300">Expected</span>
                  <span className="font-semibold">{formatCurrency(snapshot.cod.expected)}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/15 pb-2">
                  <span className="text-gray-300">Collected</span>
                  <span className="font-semibold text-emerald-300">{formatCurrency(snapshot.cod.collected)}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/15 pb-2">
                  <span className="text-gray-300">Pending</span>
                  <span className="font-semibold text-amber-300">{formatCurrency(snapshot.cod.pending)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Variance</span>
                  <span className="font-semibold text-red-300">{formatCurrency(snapshot.cod.variance)}</span>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-3 text-xs text-gray-300">
                Generated: {new Date(snapshot.generatedAt).toLocaleString('en-IN')}
              </div>

              {integrationSummary.length > 0 ? (
                <div className="mt-5">
                  <h4 className="font-semibold mb-2">Integration Pulse</h4>
                  <div className="space-y-2">
                    {integrationSummary.slice(0, 3).map((item) => (
                      <div key={item.name} className="rounded-lg bg-white/10 px-3 py-2 text-xs">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-300 capitalize">{item.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          </div>
        </div>
      ) : null}
    </section>
  )
}
