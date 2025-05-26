'use server'

import { HTTPError } from 'ky-universal'

import { api } from '@/http/api-client'
import { SignInFormType } from '@/lib/zod/sign-in-schema'

export interface SignInResponse {
  token: string
}

export async function createAccount(data: SignInFormType) {
  try {
    await api
      .post('auth/register', { json: { ...data } })
      .json<SignInResponse>()

    return { status: 201 }
  } catch (error) {
    if (error instanceof HTTPError) {
      return { status: error.response.status }
    }

    return { status: 500 }
  }
}
