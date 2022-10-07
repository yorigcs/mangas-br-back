import { Request, Response } from 'express'
import { chapterCreateService } from '../services/chapters/chapterCreateService'

import { ChapterData } from '../models/chapterModels'

interface RequestUser extends Request {
  body: ChapterData
}

export const chapterCreateController = async (req: RequestUser, res: Response): Promise<void> => {
  const chapter = await chapterCreateService(req.body, res.locals.id)
  res.status(201).send(chapter)
}
