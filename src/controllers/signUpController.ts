import { Request, Response } from 'express'

export const signUpController = async (req: Request, res: Response): Promise<void> => {
  res.send('ok')
}
