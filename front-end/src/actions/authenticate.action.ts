'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'

import { api } from '@/http/api-client'
import { SignInFormType } from '@/lib/zod/sign-in-schema'

export interface SignInResponse {
  token: string
}

export async function Authenticate(data: SignInFormType) {
  try {
    const { token } = await api
      .post('auth/login', { json: { ...data } })
      .json<SignInResponse>()

    ;(await cookies()).set('token', token, {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60,
    })

    return { status: 200 }
  } catch (error) {
    console.log(error)
    if (error instanceof HTTPError) {
      return { status: error.response.status }
    }

    return { status: 500 }
  }
}
