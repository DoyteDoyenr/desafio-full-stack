import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { env } from '@/lib/env'

import { verifyAuthToken } from './verify-jwt'

jest.mock('jsonwebtoken')

describe('verifyAuthToken middleware', () => {
  const mockNext: NextFunction = jest.fn()

  const createMockResponse = (): Response => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      locals: {},
    } as unknown as Response
    return res
  }

  const createMockRequest = (token?: string): Request => {
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    } as unknown as Request
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should verify and set user id if token is valid', () => {
    const req = createMockRequest('valid-token')
    const res = createMockResponse()

    const mockedVerify = jwt.verify as jest.Mock
    mockedVerify.mockReturnValue({
      userId: 'user-123',
    })

    verifyAuthToken(req, res, mockNext)

    expect(jwt.verify).toHaveBeenCalledWith('valid-token', env.JWT_SECRET || '')
    expect(res.locals.token).toEqual({ id: 'user-123' })
    expect(mockNext).toHaveBeenCalled()
  })

  it('should respond with 401 if token is missing', () => {
    const req = createMockRequest()
    const res = createMockResponse()

    const mockedVerify = jwt.verify as jest.Mock
    mockedVerify.mockImplementation(() => {
      throw new Error('Missing token')
    })

    verifyAuthToken(req, res, mockNext)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token!' })
    expect(mockNext).not.toHaveBeenCalled()
  })

  it('should respond with 401 if token is invalid', () => {
    const req = createMockRequest('invalid-token')
    const res = createMockResponse()

    const mockedVerify = jwt.verify as jest.Mock
    mockedVerify.mockImplementation(() => {
      throw new Error('Invalid token')
    })

    verifyAuthToken(req, res, mockNext)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token!' })
    expect(mockNext).not.toHaveBeenCalled()
  })
})
