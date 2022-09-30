import { Request, Response } from 'express'
import { createUserService } from '../services/usersService'

import { InserUserData } from '../models/userModels'
interface RequestUser extends Request {
  body: InserUserData
}

export const signUpController = async (req: RequestUser, res: Response): Promise<void> => {
  const userData = req.body
  const user = await createUserService(userData)
  res.status(201).send(user)
}
