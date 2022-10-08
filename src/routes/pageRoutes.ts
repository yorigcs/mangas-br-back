import { Router } from 'express'
import { pageCreateController } from '../controllers/pageCreateController'

import { authValidation } from '../middlewares/authValidation'
import { bodyValidation } from '../middlewares/bodyValidation'

import { createPageSchema } from '../schemas/pageSchemas'

export default (router: Router): void => {
  router.post('/create-page', authValidation, bodyValidation(createPageSchema), pageCreateController)
}
