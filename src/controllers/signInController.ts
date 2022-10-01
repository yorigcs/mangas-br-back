import { Request, Response } from 'express'

import { LoginUserData } from '../models/userModels'
import { userLoginService } from '../services/users/userLoginService'
interface RequestUser extends Request {
  body: LoginUserData
}

export const signInController = async (req: RequestUser, res: Response): Promise<void> => {
  const { email, password } = req.body
  const userAndToken = await userLoginService({ email, password })
  res.status(200).send(userAndToken)
}
