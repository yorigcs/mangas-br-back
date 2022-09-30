import { Router } from 'express'
import { signUpController } from '../controllers/signUpController'
import { bodyValidation } from '../middlewares/bodyValidation'
import { signUpSchema } from '../schemas/authSchema'
export default (router: Router): void => {
  router.post('/sign-up', bodyValidation(signUpSchema), signUpController)
}
