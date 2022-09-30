import { Request, Response, NextFunction } from 'express'
import { ConflictError } from '../errors/conflictError'

export const errorsHandler = (err: Error, _req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
  if (err instanceof ConflictError) return res.status(409).json({ error: err.message })
  next(err)
}
