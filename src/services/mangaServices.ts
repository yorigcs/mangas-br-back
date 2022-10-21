import * as mangaRepository from '../repositories/mangasRepository'
import * as usersRepository from '../repositories/usersRepository'
import * as genreRepository from '../repositories/genresRepository'
import * as mangasGenresRepository from '../repositories/mangasGenresRepository'

import { MangaGenreData, MangaData } from '../models/mangaModels'
import { Files } from '../models/files'

import { ForbiddenError } from '../errors/forbiddenError'
import { ConflictError } from '../errors/conflictError'
import { NotFoundError } from '../errors/notFoundError'

import { handleSaveFiles } from '../utils/handleSaveFiles'

const mangaAddGenre = async (data: MangaGenreData, userId: string): Promise<any> => {
  const user = await usersRepository.findUserById(userId)
  if (user?.role !== 'admin') throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await mangaRepository.findMangaById(data.mangaId)
  if (!manga) throw new NotFoundError('Este manga não existe!')

  for (const genre of data.genres) {
    const getGenre = await genreRepository.findGenresByName(genre)
    if (!getGenre) throw new NotFoundError(`O gênero "${genre}" não existe!`)
    const getMangaGenre = await mangasGenresRepository.findGenreMangaByMangaIdAndGenreId(data.mangaId, getGenre.id)
    if (getMangaGenre) throw new ConflictError(`Este manga já possuí o gênero "${genre}".`)
    await mangasGenresRepository.createGenreManga(data.mangaId, getGenre.id)
  }
}

const findAllMangasWithChapters = async (): Promise<any> => {
  return await mangaRepository.findAllMangasWithChapters()
}

const findAllMangas = async (): Promise<any> => {
  return await mangaRepository.findAllMangas()
}

const createManga = async (data: MangaData, userId: string, files: Files): Promise<any> => {
  const user = await usersRepository.findUserById(userId)
  if (user?.role !== 'admin') throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await mangaRepository.findMangaByName(data.name)
  if (manga) throw new ConflictError('Este manga já está cadastrado!')

  const url = await handleSaveFiles(`${data.name.split(' ').join('-').toLowerCase()}`, files)

  const mangaCreation = await mangaRepository.createManga(
    {
      name: data.name,
      author: data.author,
      cover_picture: url[0],
      description: data.description,
      posted_by: user.name
    }
  )

  return mangaCreation
}

export { mangaAddGenre, findAllMangasWithChapters, findAllMangas, createManga }
