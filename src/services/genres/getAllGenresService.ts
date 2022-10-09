import { findAllGenres } from '../../repositories/genresRepository'

export const getAllGenresService = async (): Promise<any> => {
  return await findAllGenres()
}
