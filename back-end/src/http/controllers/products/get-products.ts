import { Express } from 'express'

import { verifyAuthToken } from '@/http/middlewares/verify-jwt'
import { catchAsync } from '@/lib/catch-async'
import { makeFetchProductsUseCase } from '@/use-cases/factories/make-fetch-products-use.case copy'

export function getProducts(app: Express) {
  app.get(
    '/products',
    verifyAuthToken,
    catchAsync(async (req, res) => {
      const fetchProductsUseCase = makeFetchProductsUseCase()

      const productResponse = await fetchProductsUseCase.execute()

      return res.status(200).send(productResponse)
    }),
  )
}
