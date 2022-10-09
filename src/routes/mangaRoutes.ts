import { Router } from 'express'
import { getAllMangasWithChaptersController } from '../controllers/getAllMangasWithChaptersController'
import { mangaAddGenreController } from '../controllers/mangaAddGenreController'
import { mangaCreateController } from '../controllers/mangaCreateController'
import { authValidation } from '../middlewares/authValidation'

import { bodyValidation } from '../middlewares/bodyValidation'
import { genreSchema } from '../schemas/genresSchemas'
import { createMangaSchema } from '../schemas/mangaSchemas'

export default (router: Router): void => {
  router.post('/create-manga', authValidation, bodyValidation(createMangaSchema), mangaCreateController)
  router.post('/add-genre-to-manga', authValidation, bodyValidation(genreSchema), mangaAddGenreController)
  router.get('/mangas-with-chapters', getAllMangasWithChaptersController)
}
