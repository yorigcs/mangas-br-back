import { Request, Response } from 'express'
import { getAllMangasService } from '../services/mangas/getAllMangasService'

export const getAllMangasController = async (req: Request, res: Response): Promise<void> => {
  const mangas = await getAllMangasService()
  res.status(200).send(mangas)
}
