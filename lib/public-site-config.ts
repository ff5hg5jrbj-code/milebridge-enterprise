import type { PublicSiteConfig } from '@/lib/admin-portal-types'
import { readPortalConfig } from '@/lib/admin-portal-store'

export async function getPublicSiteConfig(): Promise<PublicSiteConfig> {
  const config = await readPortalConfig()

  return {
    siteSettings: config.siteSettings,
    homepage: config.homepage,
    featureFlags: config.featureFlags,
  }
}
