import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthRoute = request.nextUrl.pathname.startsWith('/auth')
  const isApiRoute = request.nextUrl.pathname.startsWith('/api')

  if (!token && !isAuthRoute && !isApiRoute) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url))
  }

  if (!token && isApiRoute) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url))
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|favicon.ico|placeholder.webp|sitemap.xml|robots.txt).*)',
  ],
}
