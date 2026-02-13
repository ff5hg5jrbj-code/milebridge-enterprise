import { NextResponse } from 'next/server'
import { calculatePredictiveEta, findShipmentByIdentifier } from '@/lib/logistics-tech'

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const awb = typeof payload.awb === 'string' ? payload.awb.trim() : ''
    const linkedShipment = awb ? findShipmentByIdentifier(awb) : undefined

    const distanceKm = Number(payload.distanceKm ?? (linkedShipment ? Math.max(80, linkedShipment.etaMinutes / 2.1) : NaN))
    if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
      return NextResponse.json(
        { success: false, error: 'distanceKm must be a valid number greater than zero.' },
        { status: 400 }
      )
    }

    const result = calculatePredictiveEta({
      awb: awb || undefined,
      distanceKm,
      currentDelayMinutes: Number(payload.currentDelayMinutes ?? 0),
      weatherSeverity: clamp(Number(payload.weatherSeverity ?? 0), 0, 10),
      trafficIndex: clamp(Number(payload.trafficIndex ?? 0), 0, 10),
      terrainDifficulty: clamp(Number(payload.terrainDifficulty ?? 0), 0, 10),
      vehicleUtilization: clamp(Number(payload.vehicleUtilization ?? 70), 0, 100),
    })

    return NextResponse.json({ success: true, data: result, linkedShipment })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request payload for predictive ETA calculation.' },
      { status: 400 }
    )
  }
}
