'use client'

import { useEffect, useState } from 'react'
import type { IntegrationReadiness, StandardsMatrixItem } from '@/lib/logistics-tech'

interface IntegrationResponse {
  success: boolean
  integrations?: IntegrationReadiness[]
  standards?: StandardsMatrixItem[]
}

const statusStyles: Record<string, string> = {
  ready: 'bg-emerald-100 text-emerald-700',
  pilot: 'bg-amber-100 text-amber-700',
  planned: 'bg-blue-100 text-blue-700',
}

export default function IntegrationReadinessBoard() {
  const [integrations, setIntegrations] = useState<IntegrationReadiness[]>([])
  const [standards, setStandards] = useState<StandardsMatrixItem[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('/api/integrations')
        const payload = (await response.json()) as IntegrationResponse

        if (!response.ok || !payload.success) {
          setError('Unable to load integration readiness data.')
          return
        }

        setIntegrations(payload.integrations || [])
        setStandards(payload.standards || [])
      } catch {
        setError('Unable to load integration readiness data.')
      }
    }

    void load()
  }, [])

  return (
    <section id="integrations" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <p className="text-sm font-semibold text-red-700 mb-2">ULIP, ONDC, AND DATA STANDARDS</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Integration and Standards Readiness</h2>
      <p className="text-gray-600 mb-6">
        Multi-modal integration readiness for ULIP and ONDC, plus standards-aligned data layer for GS1 EPCIS 2.0 and IATA ONE Record workflows.
      </p>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 text-sm mb-6">{error}</div> : null}

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {integrations.map((item) => (
          <article key={item.name} className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <p className="font-bold text-gray-900">{item.name}</p>
              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status]}`}>
                {item.status.toUpperCase()}
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">{item.category}</p>
            <p className="text-sm text-gray-700 mb-2">{item.capability}</p>
            <p className="text-xs text-gray-500">{item.notes}</p>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 overflow-x-auto">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Standards Matrix</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500">
              <th className="pb-2">Standard</th>
              <th className="pb-2">Use Case</th>
              <th className="pb-2">Payload</th>
              <th className="pb-2">Readiness</th>
            </tr>
          </thead>
          <tbody>
            {standards.map((item) => (
              <tr key={item.standard} className="border-b border-gray-100 last:border-0">
                <td className="py-2 font-semibold text-gray-900">{item.standard}</td>
                <td className="py-2 text-gray-700">{item.useCase}</td>
                <td className="py-2 text-gray-600">{item.payload}</td>
                <td className="py-2">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[item.readiness]}`}>
                    {item.readiness.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}
