import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  ;(await cookies()).set('token', '', {
    path: '/',
    httpOnly: true,
    maxAge: 0,
  })

  return NextResponse.json({})
}
