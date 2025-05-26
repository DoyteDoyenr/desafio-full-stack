import { Metadata } from 'next'

import { SignInForm } from '@/components/forms/sign-in-form'

export const metadata: Metadata = {
  title: 'Entrar - Cogna',
  description: 'Faça login na sua conta',
}

export default function SignInPage() {
  return <SignInForm />
}
