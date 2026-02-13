import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import { getAdminSessionFromRequest } from '@/lib/admin-auth'
import {
  createAuditEntry,
  pushAuditLog,
  readPortalConfig,
  updatePortalConfig,
} from '@/lib/admin-portal-store'
import type { IntegrationCategory, IntegrationConfig, IntegrationStatus } from '@/lib/admin-portal-types'

const allowedStatuses = new Set<IntegrationStatus>(['active', 'pilot', 'planned', 'disabled'])
const allowedCategories = new Set<IntegrationCategory>([
  'Regulatory',
  'Marketplace',
  'Data Standard',
  'Air Cargo',
  'Communication',
  'Payments',
  'Custom',
])

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
  return NextResponse.json({ success: true, data: config.integrations })
}

export async function POST(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await request.json()
    const name = typeof payload.name === 'string' ? payload.name.trim() : ''
    if (!name) {
      return NextResponse.json({ success: false, error: 'Integration name is required.' }, { status: 400 })
    }

    const category =
      typeof payload.category === 'string' && allowedCategories.has(payload.category as IntegrationCategory)
        ? (payload.category as IntegrationCategory)
        : 'Custom'

    const status =
      typeof payload.status === 'string' && allowedStatuses.has(payload.status as IntegrationStatus)
        ? (payload.status as IntegrationStatus)
        : 'planned'

    const timestamp = new Date().toISOString()
    const item: IntegrationConfig = {
      id: randomUUID(),
      name,
      category,
      status,
      baseUrl: typeof payload.baseUrl === 'string' ? payload.baseUrl.trim() : '',
      authType: typeof payload.authType === 'string' ? payload.authType.trim() : '',
      credentialEnvVar: typeof payload.credentialEnvVar === 'string' ? payload.credentialEnvVar.trim() : '',
      healthEndpoint: typeof payload.healthEndpoint === 'string' ? payload.healthEndpoint.trim() : '',
      webhookEndpoint: typeof payload.webhookEndpoint === 'string' ? payload.webhookEndpoint.trim() : '',
      notes: typeof payload.notes === 'string' ? payload.notes.trim() : '',
      tags: toTags(payload.tags),
      createdAt: timestamp,
      updatedAt: timestamp,
    }

    const updated = await updatePortalConfig((current) => {
      const next = {
        ...current,
        integrations: [item, ...current.integrations],
        updatedAt: timestamp,
        updatedBy: session.username,
      }

      return pushAuditLog(
        next,
        createAuditEntry('admin.integration.created', session.username, `Integration created: ${item.name}`)
      )
    })

    return NextResponse.json({ success: true, data: updated.integrations })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid integration payload.' }, { status: 400 })
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
      return NextResponse.json({ success: false, error: 'Integration id is required.' }, { status: 400 })
    }

    const updatedConfig = await updatePortalConfig((current) => {
      const integrations = current.integrations.map((item) => {
        if (item.id !== id) return item

        return {
          ...item,
          name: typeof payload.name === 'string' && payload.name.trim() ? payload.name.trim() : item.name,
          category:
            typeof payload.category === 'string' && allowedCategories.has(payload.category as IntegrationCategory)
              ? (payload.category as IntegrationCategory)
              : item.category,
          status:
            typeof payload.status === 'string' && allowedStatuses.has(payload.status as IntegrationStatus)
              ? (payload.status as IntegrationStatus)
              : item.status,
          baseUrl: typeof payload.baseUrl === 'string' ? payload.baseUrl.trim() : item.baseUrl,
          authType: typeof payload.authType === 'string' ? payload.authType.trim() : item.authType,
          credentialEnvVar:
            typeof payload.credentialEnvVar === 'string'
              ? payload.credentialEnvVar.trim()
              : item.credentialEnvVar,
          healthEndpoint:
            typeof payload.healthEndpoint === 'string' ? payload.healthEndpoint.trim() : item.healthEndpoint,
          webhookEndpoint:
            typeof payload.webhookEndpoint === 'string' ? payload.webhookEndpoint.trim() : item.webhookEndpoint,
          notes: typeof payload.notes === 'string' ? payload.notes.trim() : item.notes,
          tags: payload.tags !== undefined ? toTags(payload.tags) : item.tags,
          updatedAt: new Date().toISOString(),
        }
      })

      const next = {
        ...current,
        integrations,
        updatedAt: new Date().toISOString(),
        updatedBy: session.username,
      }

      return pushAuditLog(
        next,
        createAuditEntry('admin.integration.updated', session.username, `Integration updated: ${id}`)
      )
    })

    return NextResponse.json({ success: true, data: updatedConfig.integrations })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid integration update payload.' }, { status: 400 })
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
    return NextResponse.json({ success: false, error: 'Integration id is required.' }, { status: 400 })
  }

  const updatedConfig = await updatePortalConfig((current) => {
    const next = {
      ...current,
      integrations: current.integrations.filter((item) => item.id !== id),
      updatedAt: new Date().toISOString(),
      updatedBy: session.username,
    }

    return pushAuditLog(next, createAuditEntry('admin.integration.deleted', session.username, `Integration removed: ${id}`))
  })

  return NextResponse.json({ success: true, data: updatedConfig.integrations })
}
