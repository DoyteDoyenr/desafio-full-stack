import { Product } from '@prisma/client'

import { ProductsRepository } from '@/repositories/products-repository'

interface CreateProductUseCaseRequest {
  name: string
  price: number
  image: string
  category: string
}

interface CreateProductUseCaseResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ name, price, image, category }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      name,
      price,
      image,
      category,
    })

    return {
      product,
    }
  }
}
