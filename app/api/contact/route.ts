import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('=== Contact API called ===');
  console.log('API Key exists:', !!process.env.RESEND_API_KEY);
  
  try {
    const { name, email, message } = await request.json();
    console.log('Form data received:', { name, email, message });

    console.log('Attempting to send email...');
    const data = await resend.emails.send({
      from: 'MileBridge Contact <onboarding@resend.dev>',
      to: email,  // Changed to send to submitter's email for testing
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('ERROR sending email:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
