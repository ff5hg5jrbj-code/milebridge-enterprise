import { NextResponse } from 'next/server'
import { buildDocumentIntelligencePreview } from '@/lib/logistics-tech'

const allowedDocTypes = new Set(['proof_of_delivery', 'invoice'])
const maxFileSizeBytes = 10 * 1024 * 1024

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const documentType = typeof formData.get('documentType') === 'string' ? String(formData.get('documentType')) : ''
    const awb = typeof formData.get('awb') === 'string' ? String(formData.get('awb')).trim() : ''
    const file = formData.get('file')

    if (!documentType || !allowedDocTypes.has(documentType)) {
      return NextResponse.json(
        { success: false, error: 'documentType must be proof_of_delivery or invoice.' },
        { status: 400 }
      )
    }

    let fileName = 'sample-document.pdf'

    if (file instanceof File && file.size > 0) {
      if (file.size > maxFileSizeBytes) {
        return NextResponse.json(
          { success: false, error: 'Uploaded document must be 10MB or less.' },
          { status: 400 }
        )
      }
      fileName = file.name || fileName
    }

    const preview = buildDocumentIntelligencePreview({
      documentType,
      awb: awb || undefined,
      fileName,
    })

    return NextResponse.json({ success: true, data: preview })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Unable to process document intelligence request.' },
      { status: 400 }
    )
  }
}
