import { prisma } from '../database/prisma'
import { GenreManga } from '../models/mangaModels'

const findGenreMangaByMangaIdAndGenreId = async (mangaId: string, genreId: string): Promise<GenreManga> => {
  return await prisma.genreManga.findFirst({ where: { AND: [{ genre_id: genreId }, { manga_id: mangaId }] } })
}

const createGenreManga = async (mangaId: string, genreId: string): Promise<GenreManga> => {
  return await prisma.genreManga.create({ data: { manga_id: mangaId, genre_id: genreId } })
}

export { findGenreMangaByMangaIdAndGenreId, createGenreManga }
