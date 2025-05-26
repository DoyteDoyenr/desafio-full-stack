import { Product } from '@/@types/product'

import { api } from './api-client'

export interface ProductResponse {
  products: Product[]
}

export async function fetchProducts() {
  const products = await api.get('products').json<ProductResponse>()

  return products
}
