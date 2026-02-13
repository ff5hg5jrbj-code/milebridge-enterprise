import { promises as fs } from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import type {
  AdminPortalConfig,
  ApiDefinition,
  AuditLogEntry,
  FeatureFlags,
  HomepageContent,
  IntegrationConfig,
  SiteSettings,
} from '@/lib/admin-portal-types'

const STORE_DIR = path.join(process.cwd(), 'data')
const STORE_FILE = path.join(STORE_DIR, 'admin-portal.json')
const MAX_AUDIT_LOG = 200

const defaultSiteSettings: SiteSettings = {
  companyName: 'MileBridge Logistics',
  tagline: 'Bridging distances, delivering excellence across India\'s most challenging terrains.',
  supportEmail: 'info@milebridge.in',
  careersEmail: 'hr@milebridge.in',
  salesEmail: 'info@milebridge.in',
  phone: '+91-7006419181',
  addressLine1: 'Beighpora, Srinagar - 190019',
  addressLine2: 'Jammu & Kashmir, India',
  linkedinUrl: 'https://www.linkedin.com/company/105953643',
}

const defaultHomepage: HomepageContent = {
  eyebrow: 'MILEBRIDGE LOGISTICS',
  titleLine1: 'Delivering',
  titleLine2: 'Efficiency.',
  titleLine3: 'Every Mile.',
  description:
    'MileBridge Logistics is an SLA-based 3PL and e-commerce logistics company with dedicated infrastructure tailored for smooth operations across India\'s most challenging terrains.',
  primaryCtaLabel: 'GET A QUOTE',
  primaryCtaHref: '/contact',
  secondaryCtaLabel: 'OUR SERVICES',
  secondaryCtaHref: '/services',
}

const defaultFeatureFlags: FeatureFlags = {
  maintenanceMode: false,
  showLiveOperations: true,
  showRouteCalculator: true,
  showTechnologyHighlights: true,
  showTrackingModule: true,
  showControlTowerModule: true,
  showPredictiveEtaModule: true,
  showAutomationModule: true,
  showDocumentIntelligenceModule: true,
  showIntegrationReadinessModule: true,
}

function nowIso() {
  return new Date().toISOString()
}

function createDefaultIntegrations(timestamp: string): IntegrationConfig[] {
  return [
    {
      id: randomUUID(),
      name: 'ULIP Connector',
      category: 'Regulatory',
      status: 'pilot',
      baseUrl: 'https://ulip-api.example.gov',
      authType: 'OAuth2 Client Credentials',
      credentialEnvVar: 'ULIP_CLIENT_SECRET',
      healthEndpoint: '/health',
      webhookEndpoint: '/callbacks/ulip',
      notes: 'Pilot connector for multimodal compliance and event visibility.',
      tags: ['ulip', 'compliance', 'multimodal'],
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: randomUUID(),
      name: 'ONDC Logistics Gateway',
      category: 'Marketplace',
      status: 'planned',
      baseUrl: 'https://ondc-gateway.example.com',
      authType: 'Signed Request',
      credentialEnvVar: 'ONDC_SIGNING_KEY',
      healthEndpoint: '/health',
      webhookEndpoint: '/callbacks/ondc',
      notes: 'Marketplace fulfillment exchange readiness for upcoming rollout.',
      tags: ['ondc', 'marketplace', 'fulfillment'],
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  ]
}

function createDefaultApis(timestamp: string): ApiDefinition[] {
  return [
    {
      id: randomUUID(),
      name: 'Tracking API',
      path: '/api/tracking',
      method: 'GET',
      status: 'active',
      version: 'v1',
      authRequired: false,
      rateLimitPerMinute: 120,
      owner: 'Operations Engineering',
      description: 'AWB and order-level real-time tracking endpoint.',
      tags: ['tracking', 'customer-facing'],
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: randomUUID(),
      name: 'Control Tower API',
      path: '/api/control-tower',
      method: 'GET',
      status: 'active',
      version: 'v1',
      authRequired: false,
      rateLimitPerMinute: 60,
      owner: 'Ops Intelligence',
      description: 'Aggregated operations metrics for SLA and COD governance.',
      tags: ['analytics', 'ops'],
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  ]
}

export function createDefaultPortalConfig(): AdminPortalConfig {
  const timestamp = nowIso()

  return {
    version: 1,
    siteSettings: defaultSiteSettings,
    homepage: defaultHomepage,
    featureFlags: defaultFeatureFlags,
    integrations: createDefaultIntegrations(timestamp),
    apiDefinitions: createDefaultApis(timestamp),
    auditLog: [
      {
        id: randomUUID(),
        action: 'admin.portal.initialized',
        actor: 'system',
        timestamp,
        details: 'Default admin portal configuration initialized.',
      },
    ],
    updatedAt: timestamp,
    updatedBy: 'system',
  }
}

async function ensureStoreFile() {
  await fs.mkdir(STORE_DIR, { recursive: true })

  try {
    await fs.access(STORE_FILE)
  } catch {
    const defaults = createDefaultPortalConfig()
    await fs.writeFile(STORE_FILE, JSON.stringify(defaults, null, 2), 'utf8')
  }
}

function normalizeConfig(raw: AdminPortalConfig): AdminPortalConfig {
  const defaults = createDefaultPortalConfig()

  return {
    ...defaults,
    ...raw,
    siteSettings: { ...defaults.siteSettings, ...(raw.siteSettings || {}) },
    homepage: { ...defaults.homepage, ...(raw.homepage || {}) },
    featureFlags: { ...defaults.featureFlags, ...(raw.featureFlags || {}) },
    integrations: Array.isArray(raw.integrations) ? raw.integrations : defaults.integrations,
    apiDefinitions: Array.isArray(raw.apiDefinitions) ? raw.apiDefinitions : defaults.apiDefinitions,
    auditLog: Array.isArray(raw.auditLog) ? raw.auditLog.slice(-MAX_AUDIT_LOG) : defaults.auditLog,
  }
}

export async function readPortalConfig(): Promise<AdminPortalConfig> {
  await ensureStoreFile()

  const raw = await fs.readFile(STORE_FILE, 'utf8')
  try {
    const parsed = JSON.parse(raw) as AdminPortalConfig
    return normalizeConfig(parsed)
  } catch {
    const defaults = createDefaultPortalConfig()
    await fs.writeFile(STORE_FILE, JSON.stringify(defaults, null, 2), 'utf8')
    return defaults
  }
}

export async function writePortalConfig(config: AdminPortalConfig) {
  await ensureStoreFile()
  await fs.writeFile(STORE_FILE, JSON.stringify(config, null, 2), 'utf8')
}

export async function updatePortalConfig(
  updater: (current: AdminPortalConfig) => AdminPortalConfig
): Promise<AdminPortalConfig> {
  const current = await readPortalConfig()
  const updated = updater(current)
  await writePortalConfig(updated)
  return updated
}

export function createAuditEntry(action: string, actor: string, details: string): AuditLogEntry {
  return {
    id: randomUUID(),
    action,
    actor,
    timestamp: nowIso(),
    details,
  }
}

export function pushAuditLog(config: AdminPortalConfig, entry: AuditLogEntry): AdminPortalConfig {
  return {
    ...config,
    auditLog: [...config.auditLog, entry].slice(-MAX_AUDIT_LOG),
  }
}
