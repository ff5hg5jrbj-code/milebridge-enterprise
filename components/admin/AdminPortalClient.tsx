'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import type {
  AdminPortalConfig,
  ApiDefinition,
  ApiDefinitionStatus,
  FeatureFlags,
  HomepageContent,
  IntegrationCategory,
  IntegrationConfig,
  IntegrationStatus,
  SiteSettings,
} from '@/lib/admin-portal-types'

type TabKey = 'overview' | 'website' | 'features' | 'integrations' | 'apis' | 'tester' | 'audit'

const tabs: Array<{ id: TabKey; label: string }> = [
  { id: 'overview', label: 'Overview' },
  { id: 'website', label: 'Website Content' },
  { id: 'features', label: 'Feature Flags' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'apis', label: 'API Registry' },
  { id: 'tester', label: 'API Tester' },
  { id: 'audit', label: 'Audit Log' },
]

const integrationCategories: IntegrationCategory[] = [
  'Regulatory',
  'Marketplace',
  'Data Standard',
  'Air Cargo',
  'Communication',
  'Payments',
  'Custom',
]

const integrationStatuses: IntegrationStatus[] = ['active', 'pilot', 'planned', 'disabled']
const apiStatuses: ApiDefinitionStatus[] = ['active', 'draft', 'deprecated', 'disabled']

interface ApiTesterResult {
  status: number
  statusText: string
  durationMs: number
  headers: Record<string, string>
  bodyPreview: string
  truncated: boolean
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export default function AdminPortalClient() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const [config, setConfig] = useState<AdminPortalConfig | null>(null)
  const [integrations, setIntegrations] = useState<IntegrationConfig[]>([])
  const [apiDefinitions, setApiDefinitions] = useState<ApiDefinition[]>([])

  const [siteDraft, setSiteDraft] = useState<SiteSettings | null>(null)
  const [homepageDraft, setHomepageDraft] = useState<HomepageContent | null>(null)
  const [featureDraft, setFeatureDraft] = useState<FeatureFlags | null>(null)

  const [integrationForm, setIntegrationForm] = useState({
    name: '',
    category: 'Custom' as IntegrationCategory,
    status: 'planned' as IntegrationStatus,
    baseUrl: '',
    authType: '',
    credentialEnvVar: '',
    healthEndpoint: '',
    webhookEndpoint: '',
    notes: '',
    tags: '',
  })

  const [apiForm, setApiForm] = useState({
    name: '',
    path: '',
    method: 'GET',
    status: 'draft' as ApiDefinitionStatus,
    version: 'v1',
    authRequired: true,
    rateLimitPerMinute: 60,
    owner: '',
    description: '',
    integrationId: '',
    tags: '',
  })

  const [testerForm, setTesterForm] = useState({
    url: 'https://httpbin.org/get',
    method: 'GET',
    headers: '{\n  "Content-Type": "application/json"\n}',
    body: '{\n  "ping": "ok"\n}',
  })
  const [testerResult, setTesterResult] = useState<ApiTesterResult | null>(null)

  const summary = useMemo(() => {
    if (!config) {
      return {
        integrationCount: 0,
        activeIntegrationCount: 0,
        apiCount: 0,
        activeApiCount: 0,
      }
    }

    return {
      integrationCount: integrations.length,
      activeIntegrationCount: integrations.filter((item) => item.status === 'active').length,
      apiCount: apiDefinitions.length,
      activeApiCount: apiDefinitions.filter((item) => item.status === 'active').length,
    }
  }, [config, integrations, apiDefinitions])

  const loadPortalData = async () => {
    setLoading(true)
    setError('')

    try {
      const [configRes, integrationRes, apiRes] = await Promise.all([
        fetch('/api/admin/config'),
        fetch('/api/admin/integrations'),
        fetch('/api/admin/api-definitions'),
      ])

      const configPayload = (await configRes.json()) as ApiResponse<AdminPortalConfig>
      const integrationPayload = (await integrationRes.json()) as ApiResponse<IntegrationConfig[]>
      const apiPayload = (await apiRes.json()) as ApiResponse<ApiDefinition[]>

      if (!configRes.ok || !configPayload.success || !configPayload.data) {
        throw new Error(configPayload.error || 'Unable to load admin configuration.')
      }

      if (!integrationRes.ok || !integrationPayload.success || !integrationPayload.data) {
        throw new Error(integrationPayload.error || 'Unable to load integrations.')
      }

      if (!apiRes.ok || !apiPayload.success || !apiPayload.data) {
        throw new Error(apiPayload.error || 'Unable to load API definitions.')
      }

      setConfig(configPayload.data)
      setIntegrations(integrationPayload.data)
      setApiDefinitions(apiPayload.data)
      setSiteDraft(configPayload.data.siteSettings)
      setHomepageDraft(configPayload.data.homepage)
      setFeatureDraft(configPayload.data.featureFlags)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load portal data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadPortalData()
  }, [])

  const saveWebsiteSettings = async () => {
    if (!siteDraft || !homepageDraft) return

    setNotice('')
    setError('')

    const response = await fetch('/api/admin/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        siteSettings: siteDraft,
        homepage: homepageDraft,
      }),
    })

    const payload = (await response.json()) as ApiResponse<AdminPortalConfig>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to save website settings.')
      return
    }

    setConfig(payload.data)
    setNotice('Website settings saved successfully.')
  }

  const saveFeatureFlags = async () => {
    if (!featureDraft) return

    setNotice('')
    setError('')

    const response = await fetch('/api/admin/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        featureFlags: featureDraft,
      }),
    })

    const payload = (await response.json()) as ApiResponse<AdminPortalConfig>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to save feature flags.')
      return
    }

    setConfig(payload.data)
    setNotice('Feature flags updated successfully.')
  }

  const addIntegration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNotice('')
    setError('')

    const response = await fetch('/api/admin/integrations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(integrationForm),
    })

    const payload = (await response.json()) as ApiResponse<IntegrationConfig[]>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to add integration.')
      return
    }

    setIntegrations(payload.data)
    setIntegrationForm({
      name: '',
      category: 'Custom',
      status: 'planned',
      baseUrl: '',
      authType: '',
      credentialEnvVar: '',
      healthEndpoint: '',
      webhookEndpoint: '',
      notes: '',
      tags: '',
    })
    setNotice('Integration added successfully.')
    void loadPortalData()
  }

  const updateIntegrationStatus = async (id: string, status: IntegrationStatus) => {
    setNotice('')
    setError('')

    const response = await fetch('/api/admin/integrations', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })

    const payload = (await response.json()) as ApiResponse<IntegrationConfig[]>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to update integration status.')
      return
    }

    setIntegrations(payload.data)
    setNotice('Integration status updated.')
    void loadPortalData()
  }

  const removeIntegration = async (id: string) => {
    setNotice('')
    setError('')

    const response = await fetch(`/api/admin/integrations?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    })

    const payload = (await response.json()) as ApiResponse<IntegrationConfig[]>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to remove integration.')
      return
    }

    setIntegrations(payload.data)
    setNotice('Integration removed.')
    void loadPortalData()
  }

  const addApiDefinition = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNotice('')
    setError('')

    const response = await fetch('/api/admin/api-definitions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiForm),
    })

    const payload = (await response.json()) as ApiResponse<ApiDefinition[]>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to add API definition.')
      return
    }

    setApiDefinitions(payload.data)
    setApiForm({
      name: '',
      path: '',
      method: 'GET',
      status: 'draft',
      version: 'v1',
      authRequired: true,
      rateLimitPerMinute: 60,
      owner: '',
      description: '',
      integrationId: '',
      tags: '',
    })
    setNotice('API definition added successfully.')
    void loadPortalData()
  }

  const updateApiStatus = async (id: string, status: ApiDefinitionStatus) => {
    setNotice('')
    setError('')

    const response = await fetch('/api/admin/api-definitions', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })

    const payload = (await response.json()) as ApiResponse<ApiDefinition[]>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to update API status.')
      return
    }

    setApiDefinitions(payload.data)
    setNotice('API status updated.')
    void loadPortalData()
  }

  const removeApiDefinition = async (id: string) => {
    setNotice('')
    setError('')

    const response = await fetch(`/api/admin/api-definitions?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    })

    const payload = (await response.json()) as ApiResponse<ApiDefinition[]>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to remove API definition.')
      return
    }

    setApiDefinitions(payload.data)
    setNotice('API definition removed.')
    void loadPortalData()
  }

  const runApiTest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNotice('')
    setError('')
    setTesterResult(null)

    let parsedHeaders: Record<string, string> = {}
    try {
      const rawHeaders = JSON.parse(testerForm.headers) as Record<string, string>
      parsedHeaders = rawHeaders
    } catch {
      setError('Headers must be valid JSON.')
      return
    }

    const response = await fetch('/api/admin/tools/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: testerForm.url,
        method: testerForm.method,
        headers: parsedHeaders,
        body: testerForm.body,
      }),
    })

    const payload = (await response.json()) as ApiResponse<ApiTesterResult>
    if (!response.ok || !payload.success || !payload.data) {
      setError(payload.error || 'Unable to execute test request.')
      return
    }

    setTesterResult(payload.data)
    setNotice('API test completed successfully.')
    void loadPortalData()
  }

  if (loading) {
    return <div className="rounded-2xl border border-gray-200 bg-white p-8 text-gray-600">Loading admin portal...</div>
  }

  if (error && !config) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-red-700">
        <p className="font-semibold">Unable to load admin portal.</p>
        <p className="text-sm mt-2">{error}</p>
        <button onClick={() => void loadPortalData()} className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white">
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                activeTab === tab.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {notice ? <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-700 text-sm">{notice}</div> : null}
      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-red-700 text-sm">{error}</div> : null}

      {activeTab === 'overview' && config ? (
        <section className="space-y-5">
          <div className="grid md:grid-cols-4 gap-4">
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Integrations</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{summary.integrationCount}</p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Active Integrations</p>
              <p className="text-3xl font-bold text-emerald-600 mt-1">{summary.activeIntegrationCount}</p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">API Definitions</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{summary.apiCount}</p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Active APIs</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">{summary.activeApiCount}</p>
            </article>
          </div>

          <article className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Configuration Snapshot</h2>
            <p className="text-sm text-gray-600 mb-4">
              Last updated by <span className="font-semibold">{config.updatedBy}</span> on{' '}
              {new Date(config.updatedAt).toLocaleString('en-IN')}.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <p className="font-semibold text-gray-900 mb-1">Support Email</p>
                <p className="text-gray-600">{config.siteSettings.supportEmail}</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <p className="font-semibold text-gray-900 mb-1">Homepage CTA</p>
                <p className="text-gray-600">
                  {config.homepage.primaryCtaLabel} ({config.homepage.primaryCtaHref})
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <p className="font-semibold text-gray-900 mb-1">Maintenance Mode</p>
                <p className="text-gray-600">{config.featureFlags.maintenanceMode ? 'Enabled' : 'Disabled'}</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <p className="font-semibold text-gray-900 mb-1">Footer LinkedIn</p>
                <p className="text-gray-600">{config.siteSettings.linkedinUrl}</p>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      {activeTab === 'website' && siteDraft && homepageDraft ? (
        <section className="space-y-5">
          <article className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Site Settings</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['companyName', 'Company Name'],
                ['tagline', 'Tagline'],
                ['supportEmail', 'Support Email'],
                ['careersEmail', 'Careers Email'],
                ['salesEmail', 'Sales Email'],
                ['phone', 'Phone'],
                ['addressLine1', 'Address Line 1'],
                ['addressLine2', 'Address Line 2'],
                ['linkedinUrl', 'LinkedIn URL'],
              ].map(([field, label]) => (
                <div key={field}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                  <input
                    value={String(siteDraft[field as keyof SiteSettings] || '')}
                    onChange={(e) =>
                      setSiteDraft((prev) =>
                        prev ? { ...prev, [field]: e.target.value } as SiteSettings : prev
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Homepage Hero Content</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['eyebrow', 'Eyebrow'],
                ['titleLine1', 'Title Line 1'],
                ['titleLine2', 'Title Line 2'],
                ['titleLine3', 'Title Line 3'],
                ['primaryCtaLabel', 'Primary CTA Label'],
                ['primaryCtaHref', 'Primary CTA Href'],
                ['secondaryCtaLabel', 'Secondary CTA Label'],
                ['secondaryCtaHref', 'Secondary CTA Href'],
              ].map(([field, label]) => (
                <div key={field}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                  <input
                    value={String(homepageDraft[field as keyof HomepageContent] || '')}
                    onChange={(e) =>
                      setHomepageDraft((prev) =>
                        prev ? { ...prev, [field]: e.target.value } as HomepageContent : prev
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea
                rows={4}
                value={homepageDraft.description}
                onChange={(e) => setHomepageDraft((prev) => (prev ? { ...prev, description: e.target.value } : prev))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </article>

          <button
            onClick={() => void saveWebsiteSettings()}
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            Save Website Settings
          </button>
        </section>
      ) : null}

      {activeTab === 'features' && featureDraft ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Feature Flags</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {(Object.keys(featureDraft) as Array<keyof FeatureFlags>).map((key) => (
              <label key={key} className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm">
                <span className="font-medium text-gray-700">{key}</span>
                <input
                  type="checkbox"
                  checked={featureDraft[key]}
                  onChange={(e) =>
                    setFeatureDraft((prev) => (prev ? { ...prev, [key]: e.target.checked } : prev))
                  }
                  className="h-4 w-4 accent-red-600"
                />
              </label>
            ))}
          </div>

          <button
            onClick={() => void saveFeatureFlags()}
            className="mt-5 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            Save Feature Flags
          </button>
        </section>
      ) : null}

      {activeTab === 'integrations' ? (
        <section className="space-y-5">
          <form onSubmit={addIntegration} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Integration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Integration name"
                value={integrationForm.name}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, name: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <select
                value={integrationForm.category}
                onChange={(e) =>
                  setIntegrationForm((prev) => ({ ...prev, category: e.target.value as IntegrationCategory }))
                }
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {integrationCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                value={integrationForm.status}
                onChange={(e) =>
                  setIntegrationForm((prev) => ({ ...prev, status: e.target.value as IntegrationStatus }))
                }
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {integrationStatuses.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                placeholder="Base URL"
                value={integrationForm.baseUrl}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, baseUrl: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                placeholder="Auth Type"
                value={integrationForm.authType}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, authType: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                placeholder="Credential Env Var"
                value={integrationForm.credentialEnvVar}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, credentialEnvVar: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                placeholder="Health Endpoint"
                value={integrationForm.healthEndpoint}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, healthEndpoint: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                placeholder="Webhook Endpoint"
                value={integrationForm.webhookEndpoint}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, webhookEndpoint: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                placeholder="Tags (comma-separated)"
                value={integrationForm.tags}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, tags: e.target.value }))}
                className="md:col-span-2 rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                rows={3}
                placeholder="Notes"
                value={integrationForm.notes}
                onChange={(e) => setIntegrationForm((prev) => ({ ...prev, notes: e.target.value }))}
                className="md:col-span-2 rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button className="mt-4 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
              Add Integration
            </button>
          </form>

          <article className="rounded-2xl border border-gray-200 bg-white p-6 overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration Registry</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Category</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Base URL</th>
                  <th className="pb-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {integrations.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2 text-gray-600">{item.category}</td>
                    <td className="py-2">
                      <select
                        value={item.status}
                        onChange={(e) => void updateIntegrationStatus(item.id, e.target.value as IntegrationStatus)}
                        className="rounded-md border border-gray-300 px-2 py-1"
                      >
                        {integrationStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 text-gray-600">{item.baseUrl || '-'}</td>
                    <td className="py-2">
                      <button
                        onClick={() => void removeIntegration(item.id)}
                        className="rounded-md bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 hover:bg-red-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
      ) : null}

      {activeTab === 'apis' ? (
        <section className="space-y-5">
          <form onSubmit={addApiDefinition} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add API Definition</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="API name"
                value={apiForm.name}
                onChange={(e) => setApiForm((prev) => ({ ...prev, name: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                placeholder="Path (e.g. /api/new-endpoint)"
                value={apiForm.path}
                onChange={(e) => setApiForm((prev) => ({ ...prev, path: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <select
                value={apiForm.method}
                onChange={(e) => setApiForm((prev) => ({ ...prev, method: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
              <select
                value={apiForm.status}
                onChange={(e) => setApiForm((prev) => ({ ...prev, status: e.target.value as ApiDefinitionStatus }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {apiStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <input
                placeholder="Version"
                value={apiForm.version}
                onChange={(e) => setApiForm((prev) => ({ ...prev, version: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                placeholder="Owner"
                value={apiForm.owner}
                onChange={(e) => setApiForm((prev) => ({ ...prev, owner: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="number"
                min={1}
                placeholder="Rate limit / min"
                value={apiForm.rateLimitPerMinute}
                onChange={(e) => setApiForm((prev) => ({ ...prev, rateLimitPerMinute: Number(e.target.value) }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <select
                value={apiForm.integrationId}
                onChange={(e) => setApiForm((prev) => ({ ...prev, integrationId: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">No linked integration</option>
                {integrations.map((integration) => (
                  <option key={integration.id} value={integration.id}>
                    {integration.name}
                  </option>
                ))}
              </select>

              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <input
                  type="checkbox"
                  checked={apiForm.authRequired}
                  onChange={(e) => setApiForm((prev) => ({ ...prev, authRequired: e.target.checked }))}
                  className="h-4 w-4 accent-red-600"
                />
                Auth Required
              </label>

              <input
                placeholder="Tags (comma-separated)"
                value={apiForm.tags}
                onChange={(e) => setApiForm((prev) => ({ ...prev, tags: e.target.value }))}
                className="md:col-span-2 rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                rows={3}
                placeholder="Description"
                value={apiForm.description}
                onChange={(e) => setApiForm((prev) => ({ ...prev, description: e.target.value }))}
                className="md:col-span-2 rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button className="mt-4 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
              Add API Definition
            </button>
          </form>

          <article className="rounded-2xl border border-gray-200 bg-white p-6 overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">API Registry</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Path</th>
                  <th className="pb-2">Method</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {apiDefinitions.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2 text-gray-600">{item.path}</td>
                    <td className="py-2 text-gray-600">{item.method}</td>
                    <td className="py-2">
                      <select
                        value={item.status}
                        onChange={(e) => void updateApiStatus(item.id, e.target.value as ApiDefinitionStatus)}
                        className="rounded-md border border-gray-300 px-2 py-1"
                      >
                        {apiStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2">
                      <button
                        onClick={() => void removeApiDefinition(item.id)}
                        className="rounded-md bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 hover:bg-red-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
      ) : null}

      {activeTab === 'tester' ? (
        <section className="space-y-5">
          <form onSubmit={runApiTest} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Live API Test Console</h2>
            <div className="grid md:grid-cols-[1fr_auto] gap-3 mb-3">
              <input
                value={testerForm.url}
                onChange={(e) => setTesterForm((prev) => ({ ...prev, url: e.target.value }))}
                placeholder="https://api.example.com/health"
                className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <select
                value={testerForm.method}
                onChange={(e) => setTesterForm((prev) => ({ ...prev, method: e.target.value }))}
                className="rounded-lg border border-gray-300 px-3 py-2.5"
              >
                {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Headers (JSON)</label>
                <textarea
                  rows={8}
                  value={testerForm.headers}
                  onChange={(e) => setTesterForm((prev) => ({ ...prev, headers: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Body</label>
                <textarea
                  rows={8}
                  value={testerForm.body}
                  onChange={(e) => setTesterForm((prev) => ({ ...prev, body: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <button className="mt-4 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
              Execute Request
            </button>
          </form>

          <article className="rounded-2xl border border-gray-200 bg-gray-950 p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Response</h2>
            {testerResult ? (
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white/10 p-3">
                    <p className="text-xs text-gray-300">Status</p>
                    <p className="font-semibold">{testerResult.status}</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3">
                    <p className="text-xs text-gray-300">Status Text</p>
                    <p className="font-semibold">{testerResult.statusText}</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3">
                    <p className="text-xs text-gray-300">Duration</p>
                    <p className="font-semibold">{testerResult.durationMs}ms</p>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-xs text-gray-300 mb-1">Headers</p>
                  <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(testerResult.headers, null, 2)}</pre>
                </div>

                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-xs text-gray-300 mb-1">Body Preview</p>
                  <pre className="text-xs whitespace-pre-wrap">{testerResult.bodyPreview}</pre>
                  {testerResult.truncated ? <p className="text-xs text-amber-300 mt-2">Response body truncated to 5000 characters.</p> : null}
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-300">No request executed yet.</p>
            )}
          </article>
        </section>
      ) : null}

      {activeTab === 'audit' && config ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Audit Log</h2>
          <div className="space-y-2">
            {config.auditLog
              .slice()
              .reverse()
              .slice(0, 100)
              .map((entry) => (
                <article key={entry.id} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-gray-900">{entry.action}</p>
                    <p className="text-xs text-gray-500">{new Date(entry.timestamp).toLocaleString('en-IN')}</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{entry.actor}</p>
                  <p className="text-sm text-gray-700 mt-1">{entry.details}</p>
                </article>
              ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
