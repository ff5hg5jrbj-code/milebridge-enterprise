'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const payload = (await response.json()) as { success: boolean; error?: string }
      if (!response.ok || !payload.success) {
        setError(payload.error || 'Unable to sign in.')
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setError('Unable to sign in right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_-10%,rgba(229,34,62,0.18),transparent_38%),linear-gradient(135deg,#111827_0%,#1f2937_55%,#374151_100%)] flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-2xl border border-white/20 bg-white/95 p-8 shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-red-700 mb-2">Admin Access</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">MileBridge Portal</h1>
        <p className="text-sm text-gray-600 mb-6">Manage website content, API definitions, and integrations.</p>

        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {error ? <p className="text-sm text-red-700">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:bg-gray-400"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Set <code>ADMIN_PORTAL_USERNAME</code>, <code>ADMIN_PORTAL_PASSWORD</code>, and <code>ADMIN_PORTAL_SECRET</code> in environment variables for production.
        </p>
      </form>
    </div>
  )
}
