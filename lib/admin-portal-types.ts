export type IntegrationStatus = 'active' | 'pilot' | 'planned' | 'disabled'
export type IntegrationCategory =
  | 'Regulatory'
  | 'Marketplace'
  | 'Data Standard'
  | 'Air Cargo'
  | 'Communication'
  | 'Payments'
  | 'Custom'

export type ApiDefinitionStatus = 'active' | 'draft' | 'deprecated' | 'disabled'
export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface SiteSettings {
  companyName: string
  tagline: string
  supportEmail: string
  careersEmail: string
  salesEmail: string
  phone: string
  addressLine1: string
  addressLine2: string
  linkedinUrl: string
}

export interface HomepageContent {
  eyebrow: string
  titleLine1: string
  titleLine2: string
  titleLine3: string
  description: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export interface FeatureFlags {
  maintenanceMode: boolean
  showLiveOperations: boolean
  showRouteCalculator: boolean
  showTechnologyHighlights: boolean
  showTrackingModule: boolean
  showControlTowerModule: boolean
  showPredictiveEtaModule: boolean
  showAutomationModule: boolean
  showDocumentIntelligenceModule: boolean
  showIntegrationReadinessModule: boolean
}

export interface IntegrationConfig {
  id: string
  name: string
  category: IntegrationCategory
  status: IntegrationStatus
  baseUrl: string
  authType: string
  credentialEnvVar: string
  healthEndpoint: string
  webhookEndpoint: string
  notes: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface ApiDefinition {
  id: string
  name: string
  path: string
  method: ApiMethod
  status: ApiDefinitionStatus
  version: string
  authRequired: boolean
  rateLimitPerMinute: number
  owner: string
  description: string
  integrationId?: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface AuditLogEntry {
  id: string
  action: string
  actor: string
  timestamp: string
  details: string
}

export interface AdminPortalConfig {
  version: number
  siteSettings: SiteSettings
  homepage: HomepageContent
  featureFlags: FeatureFlags
  integrations: IntegrationConfig[]
  apiDefinitions: ApiDefinition[]
  auditLog: AuditLogEntry[]
  updatedAt: string
  updatedBy: string
}

export interface PublicSiteConfig {
  siteSettings: SiteSettings
  homepage: HomepageContent
  featureFlags: FeatureFlags
}
