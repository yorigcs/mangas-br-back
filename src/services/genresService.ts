import * as genresRepository from '../repositories/genresRepository'

const findAllGenresService = async (): Promise<any> => {
  return await genresRepository.findAllGenres()
}

export { findAllGenresService }
