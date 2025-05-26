import { Metadata } from 'next'

import { ProductGrid } from '@/components/product-grid'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Coleção Premium - Cogna',
  description:
    'Descubra nossa coleção premium de produtos, onde qualidade e estilo se encontram.',
  keywords: [
    'ecommerce',
    'produtos premium',
    'loja online',
    'qualidade',
    'estilo',
  ],
  openGraph: {
    title: 'Explore Nossa Vitrine de Produtos',
    description:
      'Confira os melhores produtos premium que combinam qualidade e estilo.',
    images: ['/og-image.png'],
  },
}

export default async function Showcase() {
  return (
    <>
      <section
        id='showcase'
        className='py-16'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Nossa Coleção
            </h2>
            <p className='text-muted-foreground mx-auto mt-4 max-w-2xl'>
              Explore nossa seleção cuidadosamente escolhida de produtos premium
              projetados com qualidade e estilo em mente.
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>
    </>
  )
}
