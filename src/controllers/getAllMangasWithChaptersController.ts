import { Request, Response } from 'express'
import { getAllMangasWithChaptersService } from '../services/mangas/getAllMangasWithChaptersService'

export const getAllMangasWithChaptersController = async (req: Request, res: Response): Promise<void> => {
  const mangasWithChapter = await getAllMangasWithChaptersService()
  res.status(200).send(mangasWithChapter)
}
