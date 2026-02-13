'use client'

import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface AdminShellProps {
  username: string
  children: ReactNode
}

export default function AdminShell({ username, children }: AdminShellProps) {
  const router = useRouter()

  const logout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-red-700">MileBridge Admin Portal</p>
            <p className="text-sm text-gray-600">Control content, APIs, and integration readiness</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Signed in as {username}</span>
            <button
              onClick={logout}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  )
}
