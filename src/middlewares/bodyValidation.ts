import joi from 'joi'
import { Response, Request, NextFunction } from 'express'

export const bodyValidation = (schema: joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = JSON.parse(JSON.stringify(req.body))
    const { error } = schema.validate(body)
    if (error) {
      return res.status(422).json({ error: error.message })
    }
    next()
  }
}
