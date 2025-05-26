import { Product } from '@/@types/product'

import { api } from './api-client'

export interface ProductRequest {
  id: string
}

export interface ProductResponse {
  product: Product
}

export async function getProduct({ id }: ProductRequest) {
  const product = await api.get(`products/${id}`).json<ProductResponse>()

  return product
}
