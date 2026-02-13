'use client'

import { FormEvent, useState } from 'react'

interface DocumentIntelligenceResult {
  auditId: string
  documentType: string
  fileName: string
  processedAt: string
  signatureCaptured: boolean
  photoProofCaptured: boolean
  extractedFields: Array<{ key: string; value: string; confidence: number }>
  complianceChecks: Array<{ check: string; result: string }>
}

interface DocumentResponse {
  success: boolean
  error?: string
  data?: DocumentIntelligenceResult
}

export default function DocumentIntelligenceWorkbench() {
  const [documentType, setDocumentType] = useState<'proof_of_delivery' | 'invoice'>('proof_of_delivery')
  const [awb, setAwb] = useState('MBX90871234')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<DocumentIntelligenceResult | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const payload = new FormData()
      payload.append('documentType', documentType)
      payload.append('awb', awb)
      if (file) {
        payload.append('file', file)
      }

      const response = await fetch('/api/doc-intelligence', {
        method: 'POST',
        body: payload,
      })

      const data = (await response.json()) as DocumentResponse
      if (!response.ok || !data.success || !data.data) {
        setResult(null)
        setError(data.error || 'Unable to process document intelligence request.')
        return
      }

      setResult(data.data)
    } catch {
      setResult(null)
      setError('Unable to process document intelligence request.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="epod-doc-intelligence" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <p className="text-sm font-semibold text-red-700 mb-2">ePOD + DOCUMENT INTELLIGENCE</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">OCR Extraction and Audit-Ready Trails</h2>
      <p className="text-gray-600 mb-6">
        Capture proof-of-delivery artifacts, extract invoice/POD metadata, and maintain a compliance-ready audit record per shipment.
      </p>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-4">
          <div>
            <label htmlFor="docType" className="block text-sm font-semibold text-gray-700 mb-1">
              Document Type
            </label>
            <select
              id="docType"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value as 'proof_of_delivery' | 'invoice')}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="proof_of_delivery">Proof of Delivery</option>
              <option value="invoice">Invoice</option>
            </select>
          </div>

          <div>
            <label htmlFor="docAwb" className="block text-sm font-semibold text-gray-700 mb-1">
              AWB
            </label>
            <input
              id="docAwb"
              value={awb}
              onChange={(e) => setAwb(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="docFile" className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Document (optional)
            </label>
            <input
              id="docFile"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 file:mr-3 file:rounded-md file:border-0 file:bg-red-50 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-red-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Run OCR and ePOD Validation'}
          </button>

          {error ? <p className="text-sm text-red-700">{error}</p> : null}
        </form>

        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Extraction Output</h3>

          {result ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Audit ID</p>
                  <p className="font-semibold text-gray-900">{result.auditId}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Document</p>
                  <p className="font-semibold text-gray-900">{result.fileName}</p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">Extracted Fields</p>
                <div className="space-y-2">
                  {result.extractedFields.map((field) => (
                    <div key={field.key} className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{field.key.replace(/_/g, ' ')}</p>
                        <p className="text-xs text-gray-500">{field.value}</p>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700">{Math.round(field.confidence * 100)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-950 text-white p-4">
                <p className="text-sm font-semibold mb-2">Compliance Checks</p>
                <div className="space-y-2 text-xs">
                  {result.complianceChecks.map((check) => (
                    <div key={check.check} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-2">
                      <span>{check.check}</span>
                      <span className="font-semibold uppercase tracking-wide text-emerald-300">{check.result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                Signature captured: {result.signatureCaptured ? 'Yes' : 'No'} • Photo proof captured:{' '}
                {result.photoProofCaptured ? 'Yes' : 'No'}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">Upload a POD/invoice or run with sample data to preview OCR extraction and audit validation.</p>
          )}
        </article>
      </div>
    </section>
  )
}
