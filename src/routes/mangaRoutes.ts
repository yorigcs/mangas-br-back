import { Router } from 'express'
import * as manga from '../controllers/mangaControllers'

import { authValidation } from '../middlewares/authValidation'

import { bodyValidation } from '../middlewares/bodyValidation'
import { genreSchema } from '../schemas/genresSchemas'
import { createMangaSchema } from '../schemas/mangaSchemas'

export default (router: Router): void => {
  router.post('/create-manga', authValidation, bodyValidation(createMangaSchema), manga.createManga)
  router.post('/add-genre-to-manga', authValidation, bodyValidation(genreSchema), manga.addGenreToManga)
  router.get('/mangas-with-chapters', manga.findMangasWithChapter)
  router.get('/all-mangas', manga.findMangasWithCategory)
}
