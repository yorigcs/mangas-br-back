import { Router } from 'express'
import { mangaCreateController } from '../controllers/mangaCreateController'
import { authValidation } from '../middlewares/authValidation'

import { bodyValidation } from '../middlewares/bodyValidation'
import { createMangaSchema } from '../schemas/mangaSchemas'

export default (router: Router): void => {
  router.post('/create-manga', authValidation, bodyValidation(createMangaSchema), mangaCreateController)
}
