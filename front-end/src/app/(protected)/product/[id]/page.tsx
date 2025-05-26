import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { getProduct } from '@/http/get-product'

interface ProductModalProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: ProductModalProps): Promise<Metadata> {
  const productId = (await params).id
  const { product } = await getProduct({ id: productId })

  if (!product) return {}

  return {
    title: product.name,
    description: `Confira o ${product.name} por apenas R$${product.price.toFixed(2)}!`,
    openGraph: {
      title: product.name,
      description: `Compre agora o ${product.name} com qualidade e estilo.`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  }
}

export default async function ProductPage({ params }: ProductModalProps) {
  const productId = (await params).id
  const { product } = await getProduct({ id: productId })

  if (!product) {
    notFound()
  }

  return (
    <div className='min-h-screen py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Link href='/#showcase'>
          <Button
            variant='ghost'
            className='mb-8'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Voltar para o Mostruário
          </Button>
        </Link>

        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div className='aspect-square overflow-hidden rounded-lg bg-white'>
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={1200}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          <div className='flex flex-col'>
            <div>
              <p className='text-muted-foreground mb-2 text-sm'>
                {product.category}
              </p>
              <h1 className='mb-4 text-4xl font-bold'>{product.name}</h1>
              <p className='mb-6 text-2xl font-bold'>
                R${product.price.toFixed(2)}
              </p>

              <div className='prose prose-sm'>
                <h3 className='mb-2 text-lg font-semibold'>
                  Descrição do Produto
                </h3>
                <p className='text-muted-foreground mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h3 className='mb-2 text-lg font-semibold'>Características</h3>
                <ul className='text-muted-foreground mb-6 list-inside list-disc'>
                  <li>Materiais de qualidade premium</li>
                  <li>Feito à mão com atenção aos detalhes</li>
                  <li>Design moderno e atemporal</li>
                  <li>Perfeito para qualquer ambiente</li>
                </ul>
              </div>
            </div>

            <Button
              size='lg'
              className='mt-auto'
            >
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
