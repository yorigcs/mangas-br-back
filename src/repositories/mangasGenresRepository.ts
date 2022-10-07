import { prisma } from '../database/prisma'
import { GenreManga } from '../models/mangaModels'

export const findGenreMangaByMangaIdAndGenreId = async (mangaId: string, genreId: string): Promise<GenreManga> => {
  return await prisma.genreManga.findFirst({ where: { AND: [{ genre_id: genreId }, { manga_id: mangaId }] } })
}
