import { Request, Response } from 'express'
import * as pageService from '../services/pageService'

import { PageData } from '../models/pageModels'
import { Files } from '../models/files'

interface RequestUserCreatePage extends Request {
  body: PageData
}

interface RequestFindPagesByChapterId extends Request {
  params: { chapterId: string }
}

const createPage = async (req: RequestUserCreatePage, res: Response): Promise<void> => {
  await pageService.pageCreate(req.body, res.locals.id, req.files as Files)
  res.status(201).send('Páginas criadas com sucesso!')
}

const findPagesByChapterId = async (req: RequestFindPagesByChapterId, res: Response): Promise<void> => {
  const { chapterId } = req.params
  const pages = await pageService.findPagesByChapterId(chapterId)
  res.status(200).send(pages)
}
export { createPage, findPagesByChapterId }
