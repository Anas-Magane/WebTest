import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Security headers
  res.headers.set("X-Frame-Options", "DENY") // contre Clickjacking (maymknch ydir iframe)
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("Permissions-Policy", "geolocation=(), camera=()") // desactiver  permissions d navigateur camera wkda 
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")

  // Basic CSP (Content Security Policy)
 res.headers.set(
  "Content-Security-Policy",
  `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' data: blob:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https: https://weebtest.netlify.app;

  `.replace(/\s{2,}/g, " ").trim()
)

  return res
}
