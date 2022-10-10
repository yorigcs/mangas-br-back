import { Router } from 'express'
import * as user from '../controllers/userControllers'

import { bodyValidation } from '../middlewares/bodyValidation'
import { signUpSchema, signInSchema } from '../schemas/authSchema'

export default (router: Router): void => {
  router.post('/sign-up', bodyValidation(signUpSchema), user.signUp)
  router.post('/sign-in', bodyValidation(signInSchema), user.signIn)
}
