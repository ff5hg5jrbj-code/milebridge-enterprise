import { NextResponse } from 'next/server'
import { getAdminSessionFromRequest } from '@/lib/admin-auth'
import { createAuditEntry, updatePortalConfig, pushAuditLog } from '@/lib/admin-portal-store'

const allowedMethods = new Set(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])

function parseHeaders(value: unknown) {
  if (!value || typeof value !== 'object') return {}
  const headers: Record<string, string> = {}

  for (const [key, raw] of Object.entries(value as Record<string, unknown>)) {
    if (typeof raw === 'string' && key.trim()) {
      headers[key.trim()] = raw
    }
  }

  return headers
}

export async function POST(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await request.json()
    const method = typeof payload.method === 'string' ? payload.method.toUpperCase().trim() : 'GET'
    const urlValue = typeof payload.url === 'string' ? payload.url.trim() : ''

    if (!urlValue) {
      return NextResponse.json({ success: false, error: 'URL is required.' }, { status: 400 })
    }

    if (!allowedMethods.has(method)) {
      return NextResponse.json({ success: false, error: 'Unsupported HTTP method.' }, { status: 400 })
    }

    let url: URL
    try {
      url = new URL(urlValue)
    } catch {
      return NextResponse.json({ success: false, error: 'Invalid URL.' }, { status: 400 })
    }

    if (!['http:', 'https:'].includes(url.protocol)) {
      return NextResponse.json({ success: false, error: 'Only http/https URLs are supported.' }, { status: 400 })
    }

    const headers = parseHeaders(payload.headers)
    const body = typeof payload.body === 'string' ? payload.body : ''

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000)
    const start = Date.now()

    const response = await fetch(url.toString(), {
      method,
      headers,
      body: method === 'GET' || method === 'DELETE' ? undefined : body,
      signal: controller.signal,
    })

    clearTimeout(timeout)

    const responseText = await response.text()
    const durationMs = Date.now() - start

    await updatePortalConfig((current) => {
      const next = {
        ...current,
        updatedAt: new Date().toISOString(),
        updatedBy: session.username,
      }

      return pushAuditLog(
        next,
        createAuditEntry('admin.api_tester.executed', session.username, `${method} ${url.origin}${url.pathname}`)
      )
    })

    return NextResponse.json({
      success: true,
      data: {
        status: response.status,
        statusText: response.statusText,
        durationMs,
        headers: Object.fromEntries(Array.from(response.headers.entries()).slice(0, 30)),
        bodyPreview: responseText.slice(0, 5000),
        truncated: responseText.length > 5000,
      },
    })
  } catch {
    return NextResponse.json({ success: false, error: 'Unable to execute request.' }, { status: 400 })
  }
}
