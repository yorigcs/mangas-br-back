import { Request, Response } from 'express'
import * as genresService from '../services/genresService'

const findGenres = async (req: Request, res: Response): Promise<void> => {
  const genres = await genresService.findAllGenresService()
  res.status(200).send(genres)
}

export { findGenres }
