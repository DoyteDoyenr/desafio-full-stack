import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vitrine de Produtos',
  description: 'Bonita vitrine de produtos com rolagem infinita',
}

export default function ProductLayout({
  children,
  showcase,
}: {
  children: React.ReactNode
  showcase: React.ReactNode
}) {
  return (
    <main className='min-h-screen'>
      {children}
      {showcase}
    </main>
  )
}
