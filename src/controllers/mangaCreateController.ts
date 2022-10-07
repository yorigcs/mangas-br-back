import { Request, Response } from 'express'
import { createMangaService } from '../services/mangas/mangaCreateService'

import { MangaData } from '../models/mangaModels'

interface RequestUser extends Request {
  body: MangaData
}

export const mangaCreateController = async (req: RequestUser, res: Response): Promise<void> => {
  const manga = await createMangaService(req.body)
  res.status(201).send(manga)
}
