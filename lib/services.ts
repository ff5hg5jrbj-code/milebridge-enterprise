export interface Service {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  serviceScope: string[]
  operationalFlow: string[]
  benefits: string[]
  useCases: string[]
  slaMetrics: string[]
}

export const services: Service[] = [
  {
    slug: 'contract-logistics',
    title: 'Contract Logistics & Warehousing',
    shortDescription:
      'Dedicated warehouse, fulfillment, and dispatch operations designed around your demand cycle.',
    fullDescription:
      'Our contract logistics model is built for brands that need predictable throughput, inventory accuracy, and disciplined dispatch operations. MileBridge configures inbound, storage, pick-pack, and outbound movement as one controlled workflow, so your team gets a single operating partner instead of fragmented vendors.',
    icon: '📦',
    serviceScope: [
      'Inbound receiving and GRN validation',
      'SKU-wise putaway and bin management',
      'Pick-pack operations for B2B and D2C orders',
      'Dispatch planning with route and vehicle assignment',
      'Reverse logistics, returns QC, and restocking',
    ],
    operationalFlow: [
      'Demand planning and SKU velocity mapping',
      'Process design and SOP sign-off',
      'Go-live with WMS tracking and dashboard reporting',
      'Daily SLA monitoring with exception controls',
      'Weekly review for cost, fill rate, and turnaround',
    ],
    benefits: [
      'Lower fixed overhead through shared operational infrastructure',
      'Improved order accuracy with barcode-driven handling',
      'Faster dispatch cycles with pre-defined cut-off windows',
      'Clear accountability through documented SOPs and reporting',
      'Scalable operations for seasonal and campaign peaks',
      'Single-point ownership for storage through final dispatch',
    ],
    useCases: [
      'E-commerce and marketplace fulfillment',
      'Regional distributor replenishment',
      'Campaign and seasonal stock management',
      'Bundling, kitting, and value-added packaging',
      'Returns processing and remarketable stock recovery',
    ],
    slaMetrics: [
      'Order dispatch TAT compliance',
      'Inventory accuracy percentage',
      'OTIF (On-Time In-Full) fulfillment rate',
      'Return-to-stock turnaround time',
    ],
  },
  {
    slug: 'express-freight',
    title: 'Express & Freight Solutions',
    shortDescription:
      'Time-critical FTL and priority freight movement with controlled handoffs and live visibility.',
    fullDescription:
      'MileBridge express freight services are designed for urgent commercial movement where transit delays directly impact business outcomes. From line-haul planning to delivery confirmation, we run freight through tightly managed checkpoints, proactive communication, and route discipline.',
    icon: '🚚',
    serviceScope: [
      'Full Truckload (FTL) movement',
      'Priority and time-definite freight lanes',
      'Hub-to-hub and inter-city line-haul',
      'Dedicated vehicle allocation for critical consignments',
      'Transit milestone communication and escalation',
    ],
    operationalFlow: [
      'Lane planning and shipment readiness check',
      'Vehicle allotment and dispatch scheduling',
      'Live en-route monitoring and exception handling',
      'Delivery coordination with consignee confirmation',
      'Proof of delivery and performance reporting',
    ],
    benefits: [
      'Reduced delay risk through active transit control',
      'Better planning confidence with time-definite movement',
      'Lower shipment uncertainty through real-time visibility',
      'Dedicated support during route exceptions',
      'Improved consignee experience with proactive updates',
      'Structured POD and closure documentation',
    ],
    useCases: [
      'Critical inventory replenishment',
      'Time-bound industrial dispatches',
      'Project cargo with milestone delivery',
      'High-priority retail and distribution loads',
      'Inter-city freight during peak demand windows',
    ],
    slaMetrics: [
      'On-time pickup rate',
      'On-time delivery rate',
      'Transit deviation response time',
      'Proof-of-delivery turnaround',
    ],
  },
  {
    slug: 'last-mile',
    title: 'Last-Mile Delivery',
    shortDescription:
      'Managed last-mile and line-haul execution with high delivery reliability and customer visibility.',
    fullDescription:
      'Our last-mile operations combine route discipline, local terrain expertise, and delivery governance to help brands fulfill consistently at customer pin-code level. MileBridge aligns dispatch plans, rider allocation, and delivery attempts with your service commitments and customer communication standards.',
    icon: '🏪',
    serviceScope: [
      'Last-mile doorstep delivery',
      'Line-haul to local delivery hubs',
      'Attempt management and reattempt scheduling',
      'Proof of delivery with status capture',
      'COD and exception workflow support',
    ],
    operationalFlow: [
      'Daily order file intake and route clustering',
      'Hub-level sort and rider run-sheet assignment',
      'Live tracking of first attempt and reattempts',
      'Customer communication at each milestone',
      'Delivery closure with POD and reconciliation',
    ],
    benefits: [
      'Higher delivery success through structured attempt planning',
      'Lower customer escalations via proactive notifications',
      'Improved route productivity with cluster-based operations',
      'Clear visibility into failed-delivery root causes',
      'Operational consistency across diverse terrains',
      'Transparent SLA tracking at shipment level',
    ],
    useCases: [
      'Marketplace and D2C parcel deliveries',
      'Regional e-commerce expansion',
      'Cash-on-delivery orders',
      'Scheduled and slot-based deliveries',
      'High-volume festival and campaign fulfillment',
    ],
    slaMetrics: [
      'First-attempt delivery success rate',
      'End-to-end delivery SLA adherence',
      'Failed delivery percentage',
      'Customer notification compliance rate',
    ],
  },
  {
    slug: 'cross-border',
    title: 'Cross-Border & International',
    shortDescription:
      'Cross-border shipment coordination with documentation control and predictable movement milestones.',
    fullDescription:
      'MileBridge supports international movement through a process-first approach covering documentation, customs coordination, carrier handling, and final handoff visibility. We focus on reducing avoidable delays and compliance risks through pre-checks and structured communication.',
    icon: '✈️',
    serviceScope: [
      'Export and import shipment coordination',
      'Documentation readiness checks',
      'Customs process support and handholding',
      'Air and sea movement coordination',
      'Cross-border milestone reporting',
    ],
    operationalFlow: [
      'Shipment and HS-code documentation validation',
      'Carrier planning and booking coordination',
      'Customs clearance support at origin/destination',
      'Transit visibility and milestone tracking',
      'Delivery closure and documentation archive',
    ],
    benefits: [
      'Reduced documentation errors before dispatch',
      'Better compliance control with pre-clearance checks',
      'Improved predictability with milestone-level updates',
      'Lower coordination overhead across multiple stakeholders',
      'Faster issue resolution through dedicated escalation path',
      'Single-window communication for shipment status',
    ],
    useCases: [
      'Export consignments for manufacturers',
      'Import replenishment for distribution networks',
      'Cross-border e-commerce movement',
      'Time-sensitive international spares',
      'Documentation-heavy regulated product categories',
    ],
    slaMetrics: [
      'Documentation accuracy rate',
      'Customs clearance TAT',
      'Milestone update compliance',
      'On-time final handoff rate',
    ],
  },
  {
    slug: 'technology',
    title: 'Alyte Technology Platform',
    shortDescription:
      'A centralized control tower for live shipment visibility, route intelligence, and SLA analytics.',
    fullDescription:
      'Alyte is MileBridge\'s operations platform built to give shippers and internal teams one shared source of truth. From dispatch monitoring to performance analytics, Alyte turns daily logistics execution into measurable, actionable operating data.',
    icon: '📱',
    serviceScope: [
      'Live shipment and vehicle tracking by AWB or order ID',
      'Control tower dashboard for SLA risk and COD reconciliation',
      'Predictive ETA and dynamic rerouting trigger engine',
      'WhatsApp and SMS milestone automation with reschedule support',
      'ePOD and document intelligence with OCR extraction',
      'ULIP, ONDC, GS1 EPCIS 2.0, and IATA ONE Record readiness',
    ],
    operationalFlow: [
      'Account setup and workflow mapping',
      'Milestone configuration and alert rules',
      'Real-time operations monitoring',
      'SLA and exception dashboard review',
      'Continuous optimization via reporting insights',
    ],
    benefits: [
      'End-to-end visibility without manual follow-ups',
      'Faster exception response through alerting',
      'Improved planning with historical lane insights',
      'Shared dashboards for ops, CX, and leadership teams',
      'Reduced reporting time via automated summaries',
      'Data-backed decisions for network optimization',
    ],
    useCases: [
      'Control tower operations',
      'Daily SLA governance meetings',
      'Route and rider productivity analysis',
      'Client-facing shipment transparency',
      'Compliance-ready data exchange with external ecosystems',
      'Performance review and quarterly planning',
    ],
    slaMetrics: [
      'Tracking uptime',
      'Alert-to-action response time',
      'SLA dashboard freshness',
      'Exception closure turnaround',
    ],
  },
]
