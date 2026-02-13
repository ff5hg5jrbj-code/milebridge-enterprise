import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resendApiKey = process.env.RESEND_API_KEY
const contactReceiverEmail = process.env.CONTACT_RECEIVER_EMAIL
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || 'MileBridge Contact <onboarding@resend.dev>'

const resend = resendApiKey ? new Resend(resendApiKey) : null

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  if (!resend || !contactReceiverEmail) {
    return NextResponse.json(
      {
        success: false,
        error: 'Contact form is not configured. Set RESEND_API_KEY and CONTACT_RECEIVER_EMAIL.',
      },
      { status: 500 }
    )
  }

  try {
    const payload = await request.json()
    const name = typeof payload.name === 'string' ? payload.name.trim() : ''
    const email = typeof payload.email === 'string' ? payload.email.trim() : ''
    const message = typeof payload.message === 'string' ? payload.message.trim() : ''

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    const { data, error } = await resend.emails.send({
      from: contactFromEmail,
      to: contactReceiverEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    if (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to deliver contact message.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Unexpected server error while sending message.' },
      { status: 500 }
    )
  }
}
