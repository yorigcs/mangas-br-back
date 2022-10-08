import { Request, Response } from 'express'
import { pageCreateService } from '../services/pages/pageCreateService'

import { PageData } from '../models/pageModels'

interface RequestUser extends Request {
  body: PageData
}

export const pageCreateController = async (req: RequestUser, res: Response): Promise<void> => {
  await pageCreateService(req.body, res.locals.id)
  res.status(201).send('Páginas criadas com sucesso!')
}
