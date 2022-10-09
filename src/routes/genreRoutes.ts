import { Router } from 'express'
import { getAllGenresController } from '../controllers/getAllGenresController'

export default (router: Router): void => {
  router.get('/get-all-genres', getAllGenresController)
}
