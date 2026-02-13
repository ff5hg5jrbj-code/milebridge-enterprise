import { NextResponse } from 'next/server'
import { buildControlTowerSnapshot, getIntegrationReadiness } from '@/lib/logistics-tech'

export async function GET() {
  const snapshot = buildControlTowerSnapshot()

  return NextResponse.json({
    success: true,
    data: snapshot,
    readinessSummary: getIntegrationReadiness(),
  })
}
