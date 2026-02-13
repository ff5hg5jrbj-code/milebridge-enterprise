import { NextResponse } from 'next/server'
import { buildNotificationTemplates, findShipmentByIdentifier } from '@/lib/logistics-tech'

const allowedEvents = new Set(['pickup', 'in-transit', 'out-for-delivery', 'delay', 'delivered'])
const allowedChannels = new Set(['whatsapp', 'sms'])

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const awb = typeof payload.awb === 'string' ? payload.awb.trim() : ''
    const event = typeof payload.event === 'string' ? payload.event.trim().toLowerCase() : ''
    const channel = typeof payload.channel === 'string' ? payload.channel.trim().toLowerCase() : ''
    const rescheduleSlot = typeof payload.rescheduleSlot === 'string' ? payload.rescheduleSlot.trim() : ''

    if (!awb || !event || !channel) {
      return NextResponse.json(
        { success: false, error: 'awb, event, and channel are required.' },
        { status: 400 }
      )
    }

    if (!allowedEvents.has(event) || !allowedChannels.has(channel)) {
      return NextResponse.json(
        { success: false, error: 'Unsupported event or channel.' },
        { status: 400 }
      )
    }

    const shipment = findShipmentByIdentifier(awb)
    if (!shipment) {
      return NextResponse.json(
        { success: false, error: 'Shipment not found.' },
        { status: 404 }
      )
    }

    const templates = buildNotificationTemplates(shipment)
    const matchedTemplate = templates.find(
      (item) => item.event.toLowerCase().replace(/\s+/g, '-') === event && item.channel === channel
    )

    if (!matchedTemplate) {
      return NextResponse.json(
        { success: false, error: 'No template configured for this event/channel combination.' },
        { status: 404 }
      )
    }

    const slotNote = rescheduleSlot ? ` Preferred slot: ${rescheduleSlot}.` : ''
    const message = `${matchedTemplate.message}${slotNote}`

    return NextResponse.json({
      success: true,
      data: {
        dispatchId: `MSG-${Math.floor(100000 + Math.random() * 899999)}`,
        awb: shipment.awb,
        channel,
        event,
        message,
        status: 'queued',
        supportsSelfReschedule: matchedTemplate.supportsSelfReschedule,
      },
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request payload for communication automation.' },
      { status: 400 }
    )
  }
}
