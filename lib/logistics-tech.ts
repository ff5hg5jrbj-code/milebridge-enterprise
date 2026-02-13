export type ShipmentStatus = 'picked_up' | 'in_transit' | 'out_for_delivery' | 'delayed' | 'delivered'
export type RiskLevel = 'low' | 'medium' | 'high'

export interface ShipmentMilestone {
  code: string
  title: string
  timestamp: string
  location: string
  status: 'completed' | 'current' | 'pending'
}

export interface ShipmentRecord {
  awb: string
  orderId: string
  customer: string
  serviceLine: string
  status: ShipmentStatus
  origin: string
  destination: string
  currentLocation: string
  currentLat: number
  currentLng: number
  etaIso: string
  etaMinutes: number
  firstAttemptProbability: number
  codAmount: number
  codCollected: number
  exceptionCode?: string
  exceptionReason?: string
  milestones: ShipmentMilestone[]
}

export interface LaneMetric {
  lane: string
  volume: number
  onTimeRate: number
  averageDelayMinutes: number
  slaBreachRisk: RiskLevel
}

export interface HubMetric {
  hub: string
  inbound: number
  outbound: number
  firstAttemptSuccess: number
  codPendingAmount: number
  utilization: number
}

export interface ControlTowerSnapshot {
  generatedAt: string
  kpis: {
    activeShipments: number
    delayedShipments: number
    slaBreachRiskShipments: number
    firstAttemptSuccess: number
    codReconciledPercent: number
  }
  lanes: LaneMetric[]
  hubs: HubMetric[]
  dailyTrend: Array<{
    day: string
    onTimeRate: number
    slaRiskCases: number
  }>
  cod: {
    expected: number
    collected: number
    pending: number
    variance: number
  }
}

export interface PredictiveEtaInput {
  awb?: string
  distanceKm: number
  currentDelayMinutes?: number
  weatherSeverity: number
  trafficIndex: number
  terrainDifficulty: number
  vehicleUtilization: number
}

export interface PredictiveEtaOutput {
  awb?: string
  projectedEtaMinutes: number
  confidence: number
  risk: RiskLevel
  reasons: string[]
  reroute: {
    recommended: boolean
    alternativeRoute: string
    expectedMinutesSaved: number
    triggerCode: string
  }
}

export interface NotificationTemplate {
  event: string
  channel: 'whatsapp' | 'sms'
  message: string
  supportsSelfReschedule: boolean
}

export interface IntegrationReadiness {
  name: string
  category: 'Regulatory' | 'Marketplace' | 'Data Standard' | 'Air Cargo'
  status: 'ready' | 'pilot' | 'planned'
  capability: string
  notes: string
}

export interface StandardsMatrixItem {
  standard: string
  useCase: string
  readiness: 'ready' | 'pilot' | 'planned'
  payload: string
}

const now = new Date('2026-02-13T11:30:00+05:30')

export const sampleShipments: ShipmentRecord[] = [
  {
    awb: 'MBX90871234',
    orderId: 'ORD-102881',
    customer: 'Northline Retail Pvt Ltd',
    serviceLine: 'Last-Mile Delivery',
    status: 'in_transit',
    origin: 'Jammu Hub',
    destination: 'Srinagar City Cluster',
    currentLocation: 'Banihal Corridor NH44',
    currentLat: 33.49,
    currentLng: 75.18,
    etaIso: '2026-02-13T15:05:00+05:30',
    etaMinutes: 215,
    firstAttemptProbability: 0.93,
    codAmount: 8500,
    codCollected: 0,
    exceptionCode: 'WX02',
    exceptionReason: 'Intermittent snowfall causing speed restrictions in the tunnel zone.',
    milestones: [
      {
        code: 'PICKUP',
        title: 'Pickup Confirmed',
        timestamp: '2026-02-13T08:40:00+05:30',
        location: 'Jammu Hub',
        status: 'completed',
      },
      {
        code: 'LINEHAUL',
        title: 'Line-Haul In Transit',
        timestamp: '2026-02-13T10:05:00+05:30',
        location: 'NH44',
        status: 'current',
      },
      {
        code: 'OFD',
        title: 'Out for Delivery',
        timestamp: '2026-02-13T14:20:00+05:30',
        location: 'Srinagar Delivery Hub',
        status: 'pending',
      },
      {
        code: 'DELIVERED',
        title: 'Delivered',
        timestamp: '2026-02-13T15:05:00+05:30',
        location: 'Srinagar City Cluster',
        status: 'pending',
      },
    ],
  },
  {
    awb: 'MBX90765432',
    orderId: 'ORD-102221',
    customer: 'Valley Pharma Distributors',
    serviceLine: 'Express & Freight Solutions',
    status: 'out_for_delivery',
    origin: 'Delhi Gateway',
    destination: 'Anantnag',
    currentLocation: 'Anantnag Local Hub',
    currentLat: 33.73,
    currentLng: 75.15,
    etaIso: '2026-02-13T13:45:00+05:30',
    etaMinutes: 95,
    firstAttemptProbability: 0.97,
    codAmount: 0,
    codCollected: 0,
    milestones: [
      {
        code: 'PICKUP',
        title: 'Pickup Confirmed',
        timestamp: '2026-02-12T21:20:00+05:30',
        location: 'Delhi Gateway',
        status: 'completed',
      },
      {
        code: 'ARRIVAL',
        title: 'Arrived at Destination Hub',
        timestamp: '2026-02-13T11:40:00+05:30',
        location: 'Anantnag Local Hub',
        status: 'completed',
      },
      {
        code: 'OFD',
        title: 'Out for Delivery',
        timestamp: '2026-02-13T12:15:00+05:30',
        location: 'Anantnag',
        status: 'current',
      },
      {
        code: 'DELIVERED',
        title: 'Delivered',
        timestamp: '2026-02-13T13:45:00+05:30',
        location: 'Anantnag',
        status: 'pending',
      },
    ],
  },
  {
    awb: 'MBX90333777',
    orderId: 'ORD-101903',
    customer: 'Summit Electronics',
    serviceLine: 'Contract Logistics & Warehousing',
    status: 'delayed',
    origin: 'Ludhiana Consolidation Center',
    destination: 'Srinagar Retail Zone',
    currentLocation: 'Qazigund Hold Point',
    currentLat: 33.6,
    currentLng: 75.14,
    etaIso: '2026-02-13T18:20:00+05:30',
    etaMinutes: 410,
    firstAttemptProbability: 0.82,
    codAmount: 14200,
    codCollected: 0,
    exceptionCode: 'TR07',
    exceptionReason: 'High congestion and traffic diversion due to road maintenance.',
    milestones: [
      {
        code: 'PICKUP',
        title: 'Pickup Confirmed',
        timestamp: '2026-02-13T06:30:00+05:30',
        location: 'Ludhiana Consolidation Center',
        status: 'completed',
      },
      {
        code: 'LINEHAUL',
        title: 'Line-Haul In Transit',
        timestamp: '2026-02-13T09:15:00+05:30',
        location: 'Jammu-Srinagar Corridor',
        status: 'current',
      },
      {
        code: 'OFD',
        title: 'Out for Delivery',
        timestamp: '2026-02-13T17:00:00+05:30',
        location: 'Srinagar Retail Zone',
        status: 'pending',
      },
      {
        code: 'DELIVERED',
        title: 'Delivered',
        timestamp: '2026-02-13T18:20:00+05:30',
        location: 'Srinagar Retail Zone',
        status: 'pending',
      },
    ],
  },
]

const laneMetrics: LaneMetric[] = [
  {
    lane: 'Jammu -> Srinagar',
    volume: 426,
    onTimeRate: 97.4,
    averageDelayMinutes: 18,
    slaBreachRisk: 'medium',
  },
  {
    lane: 'Delhi -> Jammu',
    volume: 382,
    onTimeRate: 98.6,
    averageDelayMinutes: 11,
    slaBreachRisk: 'low',
  },
  {
    lane: 'Srinagar -> Leh',
    volume: 124,
    onTimeRate: 92.7,
    averageDelayMinutes: 36,
    slaBreachRisk: 'high',
  },
  {
    lane: 'Jammu -> Anantnag',
    volume: 208,
    onTimeRate: 96.3,
    averageDelayMinutes: 21,
    slaBreachRisk: 'medium',
  },
]

const hubMetrics: HubMetric[] = [
  {
    hub: 'Jammu Central Hub',
    inbound: 532,
    outbound: 511,
    firstAttemptSuccess: 97.9,
    codPendingAmount: 234000,
    utilization: 82,
  },
  {
    hub: 'Srinagar City Hub',
    inbound: 468,
    outbound: 455,
    firstAttemptSuccess: 95.8,
    codPendingAmount: 196000,
    utilization: 87,
  },
  {
    hub: 'Anantnag Local Hub',
    inbound: 193,
    outbound: 188,
    firstAttemptSuccess: 96.1,
    codPendingAmount: 71000,
    utilization: 74,
  },
]

const dailyTrend = [
  { day: 'Mon', onTimeRate: 97.2, slaRiskCases: 9 },
  { day: 'Tue', onTimeRate: 97.9, slaRiskCases: 7 },
  { day: 'Wed', onTimeRate: 96.8, slaRiskCases: 11 },
  { day: 'Thu', onTimeRate: 98.1, slaRiskCases: 6 },
  { day: 'Fri', onTimeRate: 97.5, slaRiskCases: 8 },
  { day: 'Sat', onTimeRate: 96.9, slaRiskCases: 10 },
  { day: 'Sun', onTimeRate: 97.7, slaRiskCases: 7 },
]

const integrationReadiness: IntegrationReadiness[] = [
  {
    name: 'ULIP Multi-Modal Visibility',
    category: 'Regulatory',
    status: 'pilot',
    capability: 'Shipment event sync and compliance event exchange',
    notes: 'Pilot design complete. Connector is mapped for lane milestone synchronization.',
  },
  {
    name: 'ONDC Logistics Adapter',
    category: 'Marketplace',
    status: 'planned',
    capability: 'Order intake, fulfillment updates, and cancellation status exchange',
    notes: 'Planned for next integration release after dispatch orchestration hardening.',
  },
  {
    name: 'GS1 EPCIS 2.0 Event Feed',
    category: 'Data Standard',
    status: 'ready',
    capability: 'Capture and emit Object, Aggregation, and Transformation events',
    notes: 'Schema mapping available for shipment milestones and handoff checkpoints.',
  },
  {
    name: 'IATA ONE Record Adapter',
    category: 'Air Cargo',
    status: 'pilot',
    capability: 'Airwaybill-linked cargo status API model',
    notes: 'Draft payload templates completed for air-cargo-facing clients.',
  },
]

const standardsMatrix: StandardsMatrixItem[] = [
  {
    standard: 'GS1 EPCIS 2.0',
    useCase: 'End-to-end traceability events across hubs and handoffs',
    readiness: 'ready',
    payload: 'JSON-LD event envelopes for ObjectEvent and AggregationEvent',
  },
  {
    standard: 'IATA ONE Record',
    useCase: 'Air cargo order lifecycle and status exchange',
    readiness: 'pilot',
    payload: 'ONE Record object graph for shipment milestones',
  },
  {
    standard: 'ULIP APIs',
    useCase: 'Government-facing data exchange and multi-modal integration',
    readiness: 'pilot',
    payload: 'Secure API event synchronization and compliance metadata',
  },
  {
    standard: 'ONDC Logistics Protocol',
    useCase: 'Marketplace logistics orchestration',
    readiness: 'planned',
    payload: 'Order and fulfillment lifecycle callback payloads',
  },
]

function normalizeQuery(value: string) {
  return value.trim().toUpperCase()
}

function toRiskLabel(score: number): RiskLevel {
  if (score >= 70) return 'high'
  if (score >= 40) return 'medium'
  return 'low'
}

export function findShipmentByIdentifier(identifier: string) {
  const query = normalizeQuery(identifier)
  return sampleShipments.find(
    (item) => normalizeQuery(item.awb) === query || normalizeQuery(item.orderId) === query
  )
}

export function getTrackingSamples() {
  return sampleShipments.slice(0, 3).map((item) => ({
    awb: item.awb,
    orderId: item.orderId,
    destination: item.destination,
  }))
}

export function buildControlTowerSnapshot(): ControlTowerSnapshot {
  const activeShipments = sampleShipments.filter((item) => item.status !== 'delivered').length
  const delayedShipments = sampleShipments.filter((item) => item.status === 'delayed').length
  const breachRisk = laneMetrics.filter((item) => item.slaBreachRisk === 'high').length + delayedShipments

  const codExpected = hubMetrics.reduce((sum, item) => sum + item.codPendingAmount, 0) + 340000
  const codCollected = 598000
  const codPending = codExpected - codCollected

  return {
    generatedAt: now.toISOString(),
    kpis: {
      activeShipments,
      delayedShipments,
      slaBreachRiskShipments: breachRisk,
      firstAttemptSuccess: 96.8,
      codReconciledPercent: Number(((codCollected / codExpected) * 100).toFixed(1)),
    },
    lanes: laneMetrics,
    hubs: hubMetrics,
    dailyTrend,
    cod: {
      expected: codExpected,
      collected: codCollected,
      pending: codPending,
      variance: 12500,
    },
  }
}

export function calculatePredictiveEta(input: PredictiveEtaInput): PredictiveEtaOutput {
  const baseMinutes = Math.max(30, Math.round(input.distanceKm * 2.1))
  const delay = Math.max(0, input.currentDelayMinutes ?? 0)

  const riskScore =
    input.weatherSeverity * 3 +
    input.trafficIndex * 2.4 +
    input.terrainDifficulty * 2.8 +
    Math.max(0, input.vehicleUtilization - 75) * 0.9 +
    delay * 0.45

  const risk = toRiskLabel(riskScore)
  const congestionPenalty = Math.round(input.trafficIndex * 4)
  const weatherPenalty = Math.round(input.weatherSeverity * 5)
  const terrainPenalty = Math.round(input.terrainDifficulty * 6)

  const projected = baseMinutes + delay + congestionPenalty + weatherPenalty + terrainPenalty

  const reasons: string[] = []
  if (input.weatherSeverity >= 6) reasons.push('High weather severity impacting corridor speed.')
  if (input.trafficIndex >= 6) reasons.push('Traffic congestion is above network average.')
  if (input.terrainDifficulty >= 6) reasons.push('Terrain complexity is increasing travel variance.')
  if (input.vehicleUtilization >= 88) reasons.push('Vehicle utilization is high, reducing reroute flexibility.')
  if (reasons.length === 0) reasons.push('Lane conditions are stable with manageable variability.')

  const rerouteRecommended = risk !== 'low' && (input.trafficIndex >= 6 || input.weatherSeverity >= 7)
  const minutesSaved = rerouteRecommended ? Math.max(8, Math.round((congestionPenalty + weatherPenalty) * 0.35)) : 0

  return {
    awb: input.awb,
    projectedEtaMinutes: projected,
    confidence: Number((0.94 - riskScore / 350).toFixed(2)),
    risk,
    reasons,
    reroute: {
      recommended: rerouteRecommended,
      alternativeRoute: rerouteRecommended
        ? 'Route B via service bypass and controlled delivery cluster merge'
        : 'Current route remains optimal under present conditions',
      expectedMinutesSaved: minutesSaved,
      triggerCode: rerouteRecommended ? 'RR-AUTO-21' : 'RR-NOOP-00',
    },
  }
}

export function buildNotificationTemplates(shipment: ShipmentRecord): NotificationTemplate[] {
  const baseLink = `https://www.milebridge.in/technology?track=${shipment.awb}`

  return [
    {
      event: 'Pickup',
      channel: 'whatsapp',
      message: `Shipment ${shipment.awb} has been picked up from ${shipment.origin}. Track live: ${baseLink}`,
      supportsSelfReschedule: false,
    },
    {
      event: 'In Transit',
      channel: 'sms',
      message: `Shipment ${shipment.awb} is in transit near ${shipment.currentLocation}. ETA updated for ${shipment.destination}.`,
      supportsSelfReschedule: false,
    },
    {
      event: 'Out for Delivery',
      channel: 'whatsapp',
      message: `Shipment ${shipment.awb} is out for delivery. Reply with RESCHEDULE to choose a new slot.`,
      supportsSelfReschedule: true,
    },
    {
      event: 'Delayed',
      channel: 'sms',
      message: `Shipment ${shipment.awb} is delayed due to ${shipment.exceptionReason ?? 'route disruption'}. Updated ETA shared shortly.`,
      supportsSelfReschedule: true,
    },
    {
      event: 'Delivered',
      channel: 'whatsapp',
      message: `Shipment ${shipment.awb} has been delivered successfully. ePOD and invoice copy are now available.`,
      supportsSelfReschedule: false,
    },
  ]
}

export function getIntegrationReadiness() {
  return integrationReadiness
}

export function getStandardsMatrix() {
  return standardsMatrix
}

export function buildDocumentIntelligencePreview(params: {
  documentType: string
  awb?: string
  fileName?: string
}) {
  const docType = params.documentType || 'proof_of_delivery'
  const awb = params.awb || 'MBX90871234'

  const commonFields = [
    { key: 'awb', value: awb, confidence: 0.99 },
    { key: 'consignee', value: 'Northline Retail Pvt Ltd', confidence: 0.94 },
    { key: 'delivery_hub', value: 'Srinagar City Hub', confidence: 0.91 },
  ]

  const documentFields =
    docType === 'invoice'
      ? [
          ...commonFields,
          { key: 'invoice_number', value: 'INV-77811', confidence: 0.97 },
          { key: 'invoice_amount', value: '₹85,500', confidence: 0.96 },
          { key: 'tax_amount', value: '₹15,390', confidence: 0.93 },
        ]
      : [
          ...commonFields,
          { key: 'proof_type', value: 'Signature + Photo', confidence: 0.95 },
          { key: 'recipient_name', value: 'A. Mir', confidence: 0.9 },
          { key: 'delivery_time', value: '2026-02-13T15:02:00+05:30', confidence: 0.96 },
        ]

  return {
    auditId: `AUD-${Math.floor(100000 + Math.random() * 899999)}`,
    documentType: docType,
    fileName: params.fileName || 'sample-document.pdf',
    processedAt: new Date().toISOString(),
    signatureCaptured: docType !== 'invoice',
    photoProofCaptured: docType !== 'invoice',
    extractedFields: documentFields,
    complianceChecks: [
      { check: 'AWB Validation', result: 'passed' },
      { check: 'Document Completeness', result: 'passed' },
      { check: 'Timestamp Integrity', result: 'passed' },
    ],
  }
}
