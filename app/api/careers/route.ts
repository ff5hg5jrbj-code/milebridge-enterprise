import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resendApiKey = process.env.RESEND_API_KEY
const careersReceiverEmail = process.env.CAREERS_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL
const careersFromEmail =
  process.env.CAREERS_FROM_EMAIL ||
  process.env.CONTACT_FROM_EMAIL ||
  'MileBridge Careers <onboarding@resend.dev>'

const resend = resendApiKey ? new Resend(resendApiKey) : null

const allowedResumeExtensions = new Set(['pdf', 'doc', 'docx'])
const maxResumeSizeBytes = 5 * 1024 * 1024

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getFieldValue(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  if (!resend || !careersReceiverEmail) {
    return NextResponse.json(
      {
        success: false,
        error: 'Careers form is not configured. Set RESEND_API_KEY and CAREERS_RECEIVER_EMAIL.',
      },
      { status: 500 }
    )
  }

  try {
    const formData = await request.formData()

    const fullName = getFieldValue(formData, 'fullName')
    const email = getFieldValue(formData, 'email')
    const phone = getFieldValue(formData, 'phone')
    const position = getFieldValue(formData, 'position')
    const experience = getFieldValue(formData, 'experience')
    const coverLetter = getFieldValue(formData, 'coverLetter')
    const resume = formData.get('resume')

    if (!fullName || !email || !phone || !position || !experience) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields.' },
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

    let attachment:
      | {
          filename: string
          content: Buffer
        }
      | undefined

    if (resume instanceof File && resume.size > 0) {
      const resumeName = resume.name || 'resume'
      const extension = resumeName.split('.').pop()?.toLowerCase() || ''

      if (!allowedResumeExtensions.has(extension)) {
        return NextResponse.json(
          { success: false, error: 'Resume must be in PDF, DOC, or DOCX format.' },
          { status: 400 }
        )
      }

      if (resume.size > maxResumeSizeBytes) {
        return NextResponse.json(
          { success: false, error: 'Resume size must be 5MB or less.' },
          { status: 400 }
        )
      }

      const arrayBuffer = await resume.arrayBuffer()
      attachment = {
        filename: resumeName,
        content: Buffer.from(arrayBuffer),
      }
    }

    const safeCoverLetter = coverLetter ? escapeHtml(coverLetter).replace(/\n/g, '<br />') : 'Not provided'

    const { data, error } = await resend.emails.send({
      from: careersFromEmail,
      to: careersReceiverEmail,
      replyTo: email,
      subject: `New Career Application - ${fullName}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Position:</strong> ${escapeHtml(position)}</p>
        <p><strong>Experience:</strong> ${escapeHtml(experience)}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${safeCoverLetter}</p>
      `,
      ...(attachment ? { attachments: [attachment] } : {}),
    })

    if (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to submit application. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Unexpected server error while submitting application.' },
      { status: 500 }
    )
  }
}
