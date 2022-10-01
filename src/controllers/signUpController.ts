import { Request, Response } from 'express'
import { createUserService } from '../services/users/userCreateService'

import { InsertUserData } from '../models/userModels'
interface RequestUser extends Request {
  body: InsertUserData
}

export const signUpController = async (req: RequestUser, res: Response): Promise<void> => {
  const { name, email, password } = req.body
  const user = await createUserService({ name, email, password })
  res.status(201).send(user)
}
