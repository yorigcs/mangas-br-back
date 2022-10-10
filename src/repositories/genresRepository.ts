import { prisma } from '../database/prisma'
import { Genre } from '../models/genreModels'

const findGenresByName = async (name: string): Promise<Genre> => {
  return await prisma.genre.findFirst({ where: { name } })
}

const findAllGenres = async (): Promise<Genre[]> => {
  return await prisma.genre.findMany({})
}

export { findGenresByName, findAllGenres }
