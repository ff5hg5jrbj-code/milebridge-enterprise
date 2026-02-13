import { NextResponse } from 'next/server'
import { getIntegrationReadiness, getStandardsMatrix } from '@/lib/logistics-tech'

export async function GET() {
  return NextResponse.json({
    success: true,
    integrations: getIntegrationReadiness(),
    standards: getStandardsMatrix(),
  })
}
