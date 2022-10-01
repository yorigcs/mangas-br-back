import { Request, Response, NextFunction } from 'express'
import { ConflictError } from '../errors/conflictError'
import { UnauthorizedError } from '../errors/unauthorizedError'

export const errorsHandler = (err: Error, _req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
  if (err instanceof ConflictError) return res.status(409).json({ error: err.message })
  else if (err instanceof UnauthorizedError) return res.status(401).json({ error: err.message })
  next(err)
}
