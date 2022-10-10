import { Request, Response } from 'express'

import * as mangaServices from '../services/mangaServices'

import { MangaData, MangaGenreData } from '../models/mangaModels'

interface RequestUserCreateManga extends Request {
  body: MangaData
}

interface RequestUserAddGenreToManga extends Request {
  body: MangaGenreData
}

const createManga = async (req: RequestUserCreateManga, res: Response): Promise<void> => {
  const manga = await mangaServices.createManga(req.body, res.locals.id)
  res.status(201).send(manga)
}

const addGenreToManga = async (req: RequestUserAddGenreToManga, res: Response): Promise<void> => {
  await mangaServices.mangaAddGenre(req.body, res.locals.id)
  res.status(201).send('Gêneros adicionados na obra!')
}

const findMangasWithCategory = async (req: Request, res: Response): Promise<void> => {
  const mangas = await mangaServices.findAllMangas()
  res.status(200).send(mangas)
}

const findMangasWithChapter = async (req: Request, res: Response): Promise<void> => {
  const mangasWithChapter = await mangaServices.findAllMangasWithChapters()
  res.status(200).send(mangasWithChapter)
}

export { createManga, addGenreToManga, findMangasWithCategory, findMangasWithChapter }
