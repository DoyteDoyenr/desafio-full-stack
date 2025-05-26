import { Prisma } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'

import { errorHandler } from '@/http/middlewares/error-handler'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'

describe('errorHandler middleware', () => {
  const req = {} as Request
  const next = jest.fn() as NextFunction

  const createMockResponse = (): Response => {
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as Response
    return res
  }

  it('should return 409 for UserAlreadyExistsError', () => {
    const res = createMockResponse()
    const error = new UserAlreadyExistsError()

    errorHandler(error, req, res, next)

    expect(res.status).toHaveBeenCalledWith(409)
    expect(res.send).toHaveBeenCalledWith({ message: error.message })
  })

  it('should return 404 for ResourceNotFoundError', () => {
    const res = createMockResponse()
    const error = new ResourceNotFoundError()

    errorHandler(error, req, res, next)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.send).toHaveBeenCalledWith({ message: error.message })
  })

  it('should return 401 for InvalidCredentialsError', () => {
    const res = createMockResponse()
    const error = new InvalidCredentialsError()

    errorHandler(error, req, res, next)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.send).toHaveBeenCalledWith({ message: error.message })
  })

  it('should return 409 for PrismaClientKnownRequestError with code P2002', () => {
    const res = createMockResponse()
    const prismaError = new Prisma.PrismaClientKnownRequestError('Unique constraint failed', {
      code: 'P2002',
      clientVersion: '4.0.0',
    })

    errorHandler(prismaError, req, res, next)

    expect(res.status).toHaveBeenCalledWith(409)
    expect(res.send).toHaveBeenCalledWith({ message: prismaError.message })
  })

  it('should return 500 for unknown errors', () => {
    const res = createMockResponse()
    const unknownError = new Error('Something unexpected')

    errorHandler(unknownError, req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({
      errors: [{ message: 'Something went wrong' }],
    })
  })
})
