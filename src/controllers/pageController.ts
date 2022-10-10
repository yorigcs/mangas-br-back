import { Request, Response } from 'express'
import * as pageService from '../services/pageService'

import { PageData } from '../models/pageModels'

interface RequestUserCreatePage extends Request {
  body: PageData
}

const createPage = async (req: RequestUserCreatePage, res: Response): Promise<void> => {
  await pageService.pageCreate(req.body, res.locals.id)
  res.status(201).send('Páginas criadas com sucesso!')
}
export { createPage }
