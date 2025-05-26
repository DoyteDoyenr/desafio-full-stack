import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  findById(id: string): Promise<Product | null>
  create(data: Prisma.ProductCreateInput): Promise<Product>
  findAll(): Promise<Product[]>
}
