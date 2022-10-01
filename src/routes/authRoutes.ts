import { Router } from 'express'
import { signInController } from '../controllers/signInController'
import { signUpController } from '../controllers/signUpController'
import { bodyValidation } from '../middlewares/bodyValidation'
import { signUpSchema, signInSchema } from '../schemas/authSchema'

export default (router: Router): void => {
  router.post('/sign-up', bodyValidation(signUpSchema), signUpController)
  router.post('/sign-in', bodyValidation(signInSchema), signInController)
}
