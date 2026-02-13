import { NextResponse } from 'next/server'
import { getAdminSessionFromRequest } from '@/lib/admin-auth'
import {
  createAuditEntry,
  pushAuditLog,
  readPortalConfig,
  updatePortalConfig,
} from '@/lib/admin-portal-store'
import type { FeatureFlags, HomepageContent, SiteSettings } from '@/lib/admin-portal-types'

function sanitizeString(value: unknown, fallback: string) {
  if (typeof value !== 'string') return fallback
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : fallback
}

function applySiteSettings(base: SiteSettings, patch: Partial<SiteSettings>) {
  return {
    ...base,
    companyName: sanitizeString(patch.companyName, base.companyName),
    tagline: sanitizeString(patch.tagline, base.tagline),
    supportEmail: sanitizeString(patch.supportEmail, base.supportEmail),
    careersEmail: sanitizeString(patch.careersEmail, base.careersEmail),
    salesEmail: sanitizeString(patch.salesEmail, base.salesEmail),
    phone: sanitizeString(patch.phone, base.phone),
    addressLine1: sanitizeString(patch.addressLine1, base.addressLine1),
    addressLine2: sanitizeString(patch.addressLine2, base.addressLine2),
    linkedinUrl: sanitizeString(patch.linkedinUrl, base.linkedinUrl),
  }
}

function applyHomepageContent(base: HomepageContent, patch: Partial<HomepageContent>) {
  return {
    ...base,
    eyebrow: sanitizeString(patch.eyebrow, base.eyebrow),
    titleLine1: sanitizeString(patch.titleLine1, base.titleLine1),
    titleLine2: sanitizeString(patch.titleLine2, base.titleLine2),
    titleLine3: sanitizeString(patch.titleLine3, base.titleLine3),
    description: sanitizeString(patch.description, base.description),
    primaryCtaLabel: sanitizeString(patch.primaryCtaLabel, base.primaryCtaLabel),
    primaryCtaHref: sanitizeString(patch.primaryCtaHref, base.primaryCtaHref),
    secondaryCtaLabel: sanitizeString(patch.secondaryCtaLabel, base.secondaryCtaLabel),
    secondaryCtaHref: sanitizeString(patch.secondaryCtaHref, base.secondaryCtaHref),
  }
}

function applyFeatureFlags(base: FeatureFlags, patch: Partial<FeatureFlags>) {
  return {
    ...base,
    maintenanceMode: typeof patch.maintenanceMode === 'boolean' ? patch.maintenanceMode : base.maintenanceMode,
    showLiveOperations:
      typeof patch.showLiveOperations === 'boolean' ? patch.showLiveOperations : base.showLiveOperations,
    showRouteCalculator:
      typeof patch.showRouteCalculator === 'boolean' ? patch.showRouteCalculator : base.showRouteCalculator,
    showTechnologyHighlights:
      typeof patch.showTechnologyHighlights === 'boolean'
        ? patch.showTechnologyHighlights
        : base.showTechnologyHighlights,
    showTrackingModule:
      typeof patch.showTrackingModule === 'boolean' ? patch.showTrackingModule : base.showTrackingModule,
    showControlTowerModule:
      typeof patch.showControlTowerModule === 'boolean'
        ? patch.showControlTowerModule
        : base.showControlTowerModule,
    showPredictiveEtaModule:
      typeof patch.showPredictiveEtaModule === 'boolean'
        ? patch.showPredictiveEtaModule
        : base.showPredictiveEtaModule,
    showAutomationModule:
      typeof patch.showAutomationModule === 'boolean'
        ? patch.showAutomationModule
        : base.showAutomationModule,
    showDocumentIntelligenceModule:
      typeof patch.showDocumentIntelligenceModule === 'boolean'
        ? patch.showDocumentIntelligenceModule
        : base.showDocumentIntelligenceModule,
    showIntegrationReadinessModule:
      typeof patch.showIntegrationReadinessModule === 'boolean'
        ? patch.showIntegrationReadinessModule
        : base.showIntegrationReadinessModule,
  }
}

export async function GET(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const config = await readPortalConfig()
  return NextResponse.json({ success: true, data: config })
}

export async function PUT(request: Request) {
  const session = getAdminSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await request.json()
    const siteSettingsPatch = (payload.siteSettings || {}) as Partial<SiteSettings>
    const homepagePatch = (payload.homepage || {}) as Partial<HomepageContent>
    const featureFlagsPatch = (payload.featureFlags || {}) as Partial<FeatureFlags>

    const updated = await updatePortalConfig((current) => {
      const next = {
        ...current,
        siteSettings: applySiteSettings(current.siteSettings, siteSettingsPatch),
        homepage: applyHomepageContent(current.homepage, homepagePatch),
        featureFlags: applyFeatureFlags(current.featureFlags, featureFlagsPatch),
        updatedAt: new Date().toISOString(),
        updatedBy: session.username,
      }

      return pushAuditLog(
        next,
        createAuditEntry('admin.config.updated', session.username, 'Website settings, content, or feature flags updated.')
      )
    })

    return NextResponse.json({ success: true, data: updated })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid configuration payload.' }, { status: 400 })
  }
}
