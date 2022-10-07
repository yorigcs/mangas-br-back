import { Response, Request, NextFunction } from 'express'
import { verifyToken } from '../utils/jwtTokenAdapter'

export const authValidation = (req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
  const token = req.header('x-acess-token')?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'Token inválido!' })

  const decodedToken = verifyToken(token)
  if (!decodedToken) return res.status(401).json({ error: 'Token inválido!' })

  res.locals.id = decodedToken.id
  next()
}
