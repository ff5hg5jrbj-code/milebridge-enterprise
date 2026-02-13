import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import { getAdminSessionFromRequest } from '@/lib/admin-auth'
import {
  createAuditEntry,
  pushAuditLog,
  readPortalConfig,
  updatePortalConfig,
} from '@/lib/admin-portal-store'
import type { ApiDefinition, ApiDefinitionStatus, ApiMethod } from '@/lib/admin-portal-types'

const allowedMethods = new Set<ApiMethod>(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
const allowedStatuses = new Set<ApiDefinitionStatus>(['active', 'draft', 'deprecated', 'disabled'])

function toTags(value: unknown) {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter(Boolean)
      .slice(0, 10)
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 10)
  }

  return []
}

export async function GET(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const config = await readPortalConfig()
  return NextResponse.json({ success: true, data: config.apiDefinitions })
}

export async function POST(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await request.json()

    const name = typeof payload.name === 'string' ? payload.name.trim() : ''
    const path = typeof payload.path === 'string' ? payload.path.trim() : ''
    if (!name || !path) {
      return NextResponse.json({ success: false, error: 'API name and path are required.' }, { status: 400 })
    }

    const method =
      typeof payload.method === 'string' && allowedMethods.has(payload.method as ApiMethod)
        ? (payload.method as ApiMethod)
        : 'GET'

    const status =
      typeof payload.status === 'string' && allowedStatuses.has(payload.status as ApiDefinitionStatus)
        ? (payload.status as ApiDefinitionStatus)
        : 'draft'

    const timestamp = new Date().toISOString()

    const item: ApiDefinition = {
      id: randomUUID(),
      name,
      path,
      method,
      status,
      version: typeof payload.version === 'string' && payload.version.trim() ? payload.version.trim() : 'v1',
      authRequired: Boolean(payload.authRequired),
      rateLimitPerMinute:
        typeof payload.rateLimitPerMinute === 'number' && payload.rateLimitPerMinute > 0
          ? Math.round(payload.rateLimitPerMinute)
          : 60,
      owner: typeof payload.owner === 'string' ? payload.owner.trim() : '',
      description: typeof payload.description === 'string' ? payload.description.trim() : '',
      integrationId: typeof payload.integrationId === 'string' ? payload.integrationId.trim() : undefined,
      tags: toTags(payload.tags),
      createdAt: timestamp,
      updatedAt: timestamp,
    }

    const updatedConfig = await updatePortalConfig((current) => {
      const next = {
        ...current,
        apiDefinitions: [item, ...current.apiDefinitions],
        updatedAt: timestamp,
        updatedBy: session.username,
      }

      return pushAuditLog(next, createAuditEntry('admin.api.created', session.username, `API definition created: ${item.name}`))
    })

    return NextResponse.json({ success: true, data: updatedConfig.apiDefinitions })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid API definition payload.' }, { status: 400 })
  }
}

export async function PUT(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await request.json()
    const id = typeof payload.id === 'string' ? payload.id : ''
    if (!id) {
      return NextResponse.json({ success: false, error: 'API definition id is required.' }, { status: 400 })
    }

    const updatedConfig = await updatePortalConfig((current) => {
      const apiDefinitions = current.apiDefinitions.map((item) => {
        if (item.id !== id) return item

        return {
          ...item,
          name: typeof payload.name === 'string' && payload.name.trim() ? payload.name.trim() : item.name,
          path: typeof payload.path === 'string' && payload.path.trim() ? payload.path.trim() : item.path,
          method:
            typeof payload.method === 'string' && allowedMethods.has(payload.method as ApiMethod)
              ? (payload.method as ApiMethod)
              : item.method,
          status:
            typeof payload.status === 'string' && allowedStatuses.has(payload.status as ApiDefinitionStatus)
              ? (payload.status as ApiDefinitionStatus)
              : item.status,
          version: typeof payload.version === 'string' && payload.version.trim() ? payload.version.trim() : item.version,
          authRequired: typeof payload.authRequired === 'boolean' ? payload.authRequired : item.authRequired,
          rateLimitPerMinute:
            typeof payload.rateLimitPerMinute === 'number' && payload.rateLimitPerMinute > 0
              ? Math.round(payload.rateLimitPerMinute)
              : item.rateLimitPerMinute,
          owner: typeof payload.owner === 'string' ? payload.owner.trim() : item.owner,
          description: typeof payload.description === 'string' ? payload.description.trim() : item.description,
          integrationId: typeof payload.integrationId === 'string' ? payload.integrationId.trim() : item.integrationId,
          tags: payload.tags !== undefined ? toTags(payload.tags) : item.tags,
          updatedAt: new Date().toISOString(),
        }
      })

      const next = {
        ...current,
        apiDefinitions,
        updatedAt: new Date().toISOString(),
        updatedBy: session.username,
      }

      return pushAuditLog(next, createAuditEntry('admin.api.updated', session.username, `API definition updated: ${id}`))
    })

    return NextResponse.json({ success: true, data: updatedConfig.apiDefinitions })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid API definition update payload.' }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  if (!id) {
    return NextResponse.json({ success: false, error: 'API definition id is required.' }, { status: 400 })
  }

  const updatedConfig = await updatePortalConfig((current) => {
    const next = {
      ...current,
      apiDefinitions: current.apiDefinitions.filter((item) => item.id !== id),
      updatedAt: new Date().toISOString(),
      updatedBy: session.username,
    }

    return pushAuditLog(next, createAuditEntry('admin.api.deleted', session.username, `API definition removed: ${id}`))
  })

  return NextResponse.json({ success: true, data: updatedConfig.apiDefinitions })
}
