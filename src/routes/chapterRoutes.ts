import { Router } from 'express'
import * as chapter from '../controllers/chapterController'

import { authValidation } from '../middlewares/authValidation'
import { bodyValidation } from '../middlewares/bodyValidation'
import { createChapter } from '../schemas/chapterSchema'

export default (router: Router): void => {
  router.post('/create-chapter', authValidation, bodyValidation(createChapter), chapter.createChapter)
}
