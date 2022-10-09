import { Request, Response } from 'express'
import { getAllGenresService } from '../services/genres/getAllGenresService'

export const getAllGenresController = async (req: Request, res: Response): Promise<void> => {
  const genres = await getAllGenresService()
  res.status(200).send(genres)
}
