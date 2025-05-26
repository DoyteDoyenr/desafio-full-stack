import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/@types/product'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className='group relative transform overflow-hidden rounded-lg bg-white opacity-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg'>
        <div className='aspect-square overflow-hidden'>
          <Image
            src={product.image}
            alt={product.name}
            priority
            className='mx-auto h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
            width={500}
            height={500}
          />
        </div>
        <div className='p-4'>
          <p className='text-muted-foreground mb-1 text-sm'>
            {product.category}
          </p>
          <h3 className='line-clamp-1 text-lg font-medium'>{product.name}</h3>
          <p className='mt-2 font-semibold'>R${product.price.toFixed(2)}</p>

          <div className='mt-4 flex gap-2'>
            <Link
              href={`/product/${product.id}`}
              className='flex-1'
            >
              <Button
                size='sm'
                className='w-full'
              >
                <ExternalLink className='mr-2 h-4 w-4' />
                Ver Detalhes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
