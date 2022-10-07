import { findMangaById } from '../../repositories/mangasRepository'
import { findUserById } from '../../repositories/usersRepository'
import { findGenresByName } from '../../repositories/genresRepository'
import { createGenreManga, findGenreMangaByMangaIdAndGenreId } from '../../repositories/mangasGenresRepository'

import { MangaGenreData } from '../../models/mangaModels'

import { ForbiddenError } from '../../errors/forbiddenError'
import { ConflictError } from '../../errors/conflictError'
import { NotFoundError } from '../../errors/notFoundError'

export const mangaAddGenreService = async (data: MangaGenreData, userId: string): Promise<any> => {
  const user = await findUserById(userId)
  if (!user?.is_admin) throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await findMangaById(data.mangaId)
  if (!manga) throw new NotFoundError('Este manga não existe!')

  for (const genre of data.genres) {
    const getGenre = await findGenresByName(genre)
    if (!getGenre) throw new NotFoundError(`O gênero "${genre}" não existe!`)
    const getMangaGenre = await findGenreMangaByMangaIdAndGenreId(data.mangaId, getGenre.id)
    if (getMangaGenre) throw new ConflictError(`Este manga já possuí o gênero "${genre}".`)
    await createGenreManga(data.mangaId, getGenre.id)
  }
}
