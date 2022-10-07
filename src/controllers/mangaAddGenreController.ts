import { Request, Response } from 'express'
import { mangaAddGenreService } from '../services/mangas/mangaAddGenreService'

import { MangaGenreData } from '../models/mangaModels'

interface RequestUser extends Request {
  body: MangaGenreData
}

export const mangaAddGenreController = async (req: RequestUser, res: Response): Promise<void> => {
  await mangaAddGenreService(req.body, res.locals.id)
  res.status(201).send('Gêneros adicionados na obra!')
}
