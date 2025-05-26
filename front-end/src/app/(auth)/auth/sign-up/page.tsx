import { Metadata } from 'next'

import { SignUpForm } from '@/components/forms/sign-up-form'

export const metadata: Metadata = {
  title: 'Cadastrar - Cogna',
  description: 'Crie sua conta para acessar a plataforma',
}

export default function SignUpPage() {
  return <SignUpForm />
}
