import { NextResponse } from 'next/server'
import {
  ADMIN_SESSION_COOKIE,
  adminSessionTtlSeconds,
  createAdminSessionToken,
  getAdminCredentials,
} from '@/lib/admin-auth'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const username = typeof payload.username === 'string' ? payload.username.trim() : ''
    const password = typeof payload.password === 'string' ? payload.password : ''

    const credentials = getAdminCredentials()
    if (username !== credentials.username || password !== credentials.password) {
      return NextResponse.json({ success: false, error: 'Invalid username or password.' }, { status: 401 })
    }

    const token = createAdminSessionToken(username)
    const response = NextResponse.json({ success: true, user: username })

    response.cookies.set({
      name: ADMIN_SESSION_COOKIE,
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: adminSessionTtlSeconds,
    })

    return response
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid login request.' }, { status: 400 })
  }
}
