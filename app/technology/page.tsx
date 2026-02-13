import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RealShipmentTracking from '@/components/technology/RealShipmentTracking'
import ControlTowerDashboard from '@/components/technology/ControlTowerDashboard'
import PredictiveEtaPanel from '@/components/technology/PredictiveEtaPanel'
import CommunicationAutomation from '@/components/technology/CommunicationAutomation'
import DocumentIntelligenceWorkbench from '@/components/technology/DocumentIntelligenceWorkbench'
import IntegrationReadinessBoard from '@/components/technology/IntegrationReadinessBoard'
import type { FeatureFlags } from '@/lib/admin-portal-types'
import { getPublicSiteConfig } from '@/lib/public-site-config'

export const metadata: Metadata = {
  title: 'Technology | MileBridge Logistics',
  description:
    'MileBridge digital logistics stack: real shipment tracking, control tower analytics, predictive ETA and rerouting, WhatsApp/SMS automation, ePOD intelligence, ULIP and ONDC readiness, and standards-aligned data architecture.',
}

const platformModules: Array<{
  title: string
  description: string
  href: string
  flagKey: keyof FeatureFlags
}> = [
  {
    title: 'Real Shipment Tracking',
    description: 'AWB and order lookup with live ETA, milestones, and exception reason codes.',
    href: '#real-tracking',
    flagKey: 'showTrackingModule',
  },
  {
    title: 'Control Tower Dashboard',
    description: 'SLA risk, delayed lanes, hub throughput, first-attempt success, and COD reconciliation.',
    href: '#control-tower',
    flagKey: 'showControlTowerModule',
  },
  {
    title: 'Predictive ETA + Rerouting',
    description: 'AI risk scoring with rule-based reroute triggers for traffic, weather, and terrain.',
    href: '#predictive-eta',
    flagKey: 'showPredictiveEtaModule',
  },
  {
    title: 'WhatsApp and SMS Automation',
    description: 'Milestone communication flows with self-service reschedule support.',
    href: '#automation',
    flagKey: 'showAutomationModule',
  },
  {
    title: 'ePOD + Document Intelligence',
    description: 'OCR extraction for POD and invoices with compliance-ready audit trails.',
    href: '#epod-doc-intelligence',
    flagKey: 'showDocumentIntelligenceModule',
  },
  {
    title: 'ULIP Integration Readiness',
    description: 'Multi-modal visibility and compliance synchronization capability.',
    href: '#integrations',
    flagKey: 'showIntegrationReadinessModule',
  },
  {
    title: 'ONDC Logistics Readiness',
    description: 'Marketplace-ready order and fulfillment status exchange architecture.',
    href: '#integrations',
    flagKey: 'showIntegrationReadinessModule',
  },
  {
    title: 'Standards-Ready Data Layer',
    description: 'GS1 EPCIS 2.0 and IATA ONE Record aligned event model.',
    href: '#integrations',
    flagKey: 'showIntegrationReadinessModule',
  },
]

export default async function TechnologyPage() {
  const { featureFlags } = await getPublicSiteConfig()
  const enabledModules = platformModules.filter((module) => featureFlags[module.flagKey])
  const firstModuleAnchor = enabledModules[0]?.href || '#integrations'

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="MILEBRIDGE DIGITAL PLATFORM"
        title="Technology Stack for Modern Logistics Execution"
        description="We have upgraded the platform around current logistics priorities: AI-driven decisioning, interoperable data standards, automation-first communication, and measurable sustainability outcomes."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={firstModuleAnchor}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition"
          >
            Explore Capabilities
            <span aria-hidden="true">→</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
          >
            Request Platform Demo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </PageHero>

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-red-50/60 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Capability Map</h2>
            <p className="text-lg text-gray-600">
              Each capability below is wired as a working module in this experience so teams can evaluate operational fit and readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {enabledModules.map((module) => (
              <a
                key={module.title}
                href={module.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {featureFlags.showTrackingModule ? <RealShipmentTracking /> : null}
          {featureFlags.showControlTowerModule ? <ControlTowerDashboard /> : null}
          {featureFlags.showPredictiveEtaModule ? <PredictiveEtaPanel /> : null}
          {featureFlags.showAutomationModule ? <CommunicationAutomation /> : null}
          {featureFlags.showDocumentIntelligenceModule ? <DocumentIntelligenceWorkbench /> : null}
          {featureFlags.showIntegrationReadinessModule ? <IntegrationReadinessBoard /> : null}

          {enabledModules.length === 0 ? (
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
              Technology modules are currently hidden by admin feature flags.
            </article>
          ) : null}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-950 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="text-2xl font-bold mb-3">AI + Sustainability Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Predictive ETA, rerouting, and operational control reduce idle time, fuel wastage, and avoidable service failures. This is where AI and sustainability converge into practical logistics gains.
              </p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="text-2xl font-bold mb-3">Interoperable Data Architecture</h3>
              <p className="text-gray-300 leading-relaxed">
                Standards-aligned event models make integration easier with enterprise clients, regulatory systems, marketplace networks, and air-cargo ecosystems.
              </p>
            </article>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Activate These Modules for Your Network?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Share your lane profile and operating model. We will map which modules should be deployed first for fastest ROI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 transition"
            >
              Schedule a Solution Workshop
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
