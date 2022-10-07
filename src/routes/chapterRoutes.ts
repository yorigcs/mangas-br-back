import { Router } from 'express'
import { chapterCreateController } from '../controllers/chapterCreateController'

import { authValidation } from '../middlewares/authValidation'
import { bodyValidation } from '../middlewares/bodyValidation'
import { createChapter } from '../schemas/chapterSchema'

export default (router: Router): void => {
  router.post('/create-chapter', authValidation, bodyValidation(createChapter), chapterCreateController)
}
