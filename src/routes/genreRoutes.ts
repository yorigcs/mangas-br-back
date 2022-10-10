import { Router } from 'express'
import * as genre from '../controllers/genresController'

export default (router: Router): void => {
  router.get('/get-all-genres', genre.findGenres)
}
