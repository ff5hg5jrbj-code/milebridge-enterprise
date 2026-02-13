import { NextResponse } from 'next/server'
import { buildNotificationTemplates, findShipmentByIdentifier, getTrackingSamples } from '@/lib/logistics-tech'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = (searchParams.get('query') || searchParams.get('awb') || searchParams.get('order') || '').trim()

  if (!query) {
    return NextResponse.json(
      {
        success: false,
        error: 'Provide an AWB or order reference in query params.',
        samples: getTrackingSamples(),
      },
      { status: 400 }
    )
  }

  const shipment = findShipmentByIdentifier(query)
  if (!shipment) {
    return NextResponse.json(
      {
        success: false,
        error: 'Shipment not found for the provided reference.',
        samples: getTrackingSamples(),
      },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    data: shipment,
    notifications: buildNotificationTemplates(shipment),
  })
}
