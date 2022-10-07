import { Router } from 'express'
import { mangaCreateController } from '../controllers/mangaCreateController'

import { bodyValidation } from '../middlewares/bodyValidation'
import { createMangaSchema } from '../schemas/mangaSchemas'

export default (router: Router): void => {
  router.post('/create-manga', bodyValidation(createMangaSchema), mangaCreateController)
}
