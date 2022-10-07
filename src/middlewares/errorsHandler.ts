import { NotFoundError } from '../errors/notFoundError'
import { Request, Response, NextFunction } from 'express'
import { ConflictError } from '../errors/conflictError'
import { ForbiddenError } from '../errors/forbiddenError'
import { UnauthorizedError } from '../errors/unauthorizedError'

export const errorsHandler = (err: Error, _req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
  console.log(err.message)
  if (err instanceof ConflictError) return res.status(409).json({ error: err.message })
  else if (err instanceof UnauthorizedError) return res.status(401).json({ error: err.message })
  else if (err instanceof ForbiddenError) return res.status(403).json({ error: err.message })
  else if (err instanceof NotFoundError) return res.status(404).json({ error: err.message })
  return res.status(500).json({ error: 'Ocorreu um erro interno, tente novamente mais tarde!' })
}
