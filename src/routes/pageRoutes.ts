import { Router } from 'express'
import * as page from '../controllers/pageController'

import { authValidation } from '../middlewares/authValidation'
import { bodyValidation } from '../middlewares/bodyValidation'

import { createPageSchema } from '../schemas/pageSchemas'

export default (router: Router): void => {
  router.post('/create-page', authValidation, bodyValidation(createPageSchema), page.createPage)
}
