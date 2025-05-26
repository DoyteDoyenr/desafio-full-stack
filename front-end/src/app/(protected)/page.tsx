import { Metadata } from 'next'

import { Welcome } from '@/components/welcome'

export const metadata: Metadata = {
  title: 'Bem-vindo - Cogna',
  description: 'Acesse sua conta e explore a plataforma',
}

export default function Home() {
  return (
    <>
      <Welcome />
    </>
  )
}
