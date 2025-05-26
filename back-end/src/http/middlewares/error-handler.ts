import { Prisma } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'

import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof UserAlreadyExistsError) {
    return res.status(409).send({ message: err.message })
  }

  if (err instanceof ResourceNotFoundError) {
    return res.status(404).send({ message: err.message })
  }

  if (err instanceof InvalidCredentialsError) {
    return res.status(401).send({ message: err.message })
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
    return res.status(409).send({ message: err.message })
  }

  return res.status(500).send({ errors: [{ message: 'Something went wrong' }] })
}
