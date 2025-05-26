import ky from 'ky-universal'
import { redirect } from 'next/navigation'

import { env } from '@/lib/env'

const { cookies } = await import('next/headers')

export const api = ky.create({
  prefixUrl: env.BACKEND_API_URL,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      async (request) => {
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
    afterResponse: [
      async (_input, _options, res) => {
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value
        if (res.status === 401 && token) {
          redirect('/api/logout/')
        }
      },
    ],
  },
})
