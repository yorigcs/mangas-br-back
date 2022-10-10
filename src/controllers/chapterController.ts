import { Request, Response } from 'express'
import * as chapterServices from '../services/chapterServices'

import { ChapterData } from '../models/chapterModels'

interface RequestUserCreateChapter extends Request {
  body: ChapterData
}

const createChapter = async (req: RequestUserCreateChapter, res: Response): Promise<void> => {
  const chapter = await chapterServices.chapterCreate(req.body, res.locals.id)
  res.status(201).send(chapter)
}

export { createChapter }
