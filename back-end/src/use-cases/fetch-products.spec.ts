import { InMemoryProductsRepository } from '@/repositories/in-memory/in-memory-products-repository'
import { CreateProductUseCase } from '@/use-cases/create-product'
import { FetchProductsUseCase } from '@/use-cases/fetch-products'

let productsRepository: InMemoryProductsRepository
let createProductSut: CreateProductUseCase
let fetchProductsSut: FetchProductsUseCase

describe('Fetch Products Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository()
    createProductSut = new CreateProductUseCase(productsRepository)
    fetchProductsSut = new FetchProductsUseCase(productsRepository)
  })

  it('should return a list of products', async () => {
    const productsToCreate = [
      {
        name: 'Product A',
        price: 100,
        image: 'image-url-a',
        category: 'Category A',
      },
      {
        name: 'Product B',
        price: 200,
        image: 'image-url-b',
        category: 'Category B',
      },
      {
        name: 'Product C',
        price: 300,
        image: 'image-url-c',
        category: 'Category C',
      },
      {
        name: 'Product D',
        price: 400,
        image: 'image-url-d',
        category: 'Category D',
      },
      {
        name: 'Product E',
        price: 500,
        image: 'image-url-e',
        category: 'Category E',
      },
    ]

    for (const productData of productsToCreate) {
      await createProductSut.execute(productData)
    }

    const { products } = await fetchProductsSut.execute({ page: 1 })

    expect(products).toHaveLength(5)
    expect(products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Product A' }),
        expect.objectContaining({ name: 'Product B' }),
        expect.objectContaining({ name: 'Product C' }),
        expect.objectContaining({ name: 'Product D' }),
        expect.objectContaining({ name: 'Product E' }),
      ]),
    )
  })
})
