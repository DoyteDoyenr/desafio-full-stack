import { fetchProducts } from '@/http/get-products'

import { ProductCard } from './product-card'

export async function ProductGrid() {
  const { products } = await fetchProducts()
  return (
    <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}
