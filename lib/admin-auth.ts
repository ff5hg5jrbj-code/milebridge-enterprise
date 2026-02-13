import { createHmac, timingSafeEqual } from 'crypto'

export const ADMIN_SESSION_COOKIE = 'mb_admin_session'
const SESSION_TTL_SECONDS = 60 * 60 * 12

interface SessionPayload {
  username: string
  iat: number
  exp: number
}

export interface AdminSession {
  username: string
  issuedAt: number
  expiresAt: number
}

function toBase64Url(input: string) {
  return Buffer.from(input).toString('base64url')
}

function fromBase64Url(input: string) {
  return Buffer.from(input, 'base64url').toString('utf8')
}

function getSecret() {
  return process.env.ADMIN_PORTAL_SECRET || 'milebridge-admin-secret-change-in-production'
}

function sign(data: string) {
  return createHmac('sha256', getSecret()).update(data).digest('base64url')
}

export function createAdminSessionToken(username: string) {
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + SESSION_TTL_SECONDS
  const payload: SessionPayload = { username, iat, exp }
  const encodedPayload = toBase64Url(JSON.stringify(payload))
  const signature = sign(encodedPayload)
  return `${encodedPayload}.${signature}`
}

export function verifyAdminSessionToken(token?: string | null): AdminSession | null {
  if (!token) return null

  const [encodedPayload, signature] = token.split('.')
  if (!encodedPayload || !signature) return null

  const expected = sign(encodedPayload)
  const providedBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)
  if (providedBuffer.length !== expectedBuffer.length) return null
  if (!timingSafeEqual(providedBuffer, expectedBuffer)) return null

  try {
    const payload = JSON.parse(fromBase64Url(encodedPayload)) as SessionPayload
    if (!payload.username || !payload.iat || !payload.exp) return null
    if (payload.exp <= Math.floor(Date.now() / 1000)) return null

    return {
      username: payload.username,
      issuedAt: payload.iat,
      expiresAt: payload.exp,
    }
  } catch {
    return null
  }
}

function parseCookie(cookieHeader: string | null, name: string) {
  if (!cookieHeader) return null
  const parts = cookieHeader.split(';').map((item) => item.trim())
  for (const part of parts) {
    const [key, ...valueParts] = part.split('=')
    if (key === name) {
      return valueParts.join('=') || null
    }
  }
  return null
}

export function getAdminSessionFromRequest(request: Request) {
  const cookieHeader = request.headers.get('cookie')
  const token = parseCookie(cookieHeader, ADMIN_SESSION_COOKIE)
  return verifyAdminSessionToken(token)
}

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_PORTAL_USERNAME || 'admin',
    password: process.env.ADMIN_PORTAL_PASSWORD || 'milebridge-admin',
  }
}

export const adminSessionTtlSeconds = SESSION_TTL_SECONDS
