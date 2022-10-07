import { findMangaById } from '../../repositories/mangasRepository'
import { findUserById } from '../../repositories/usersRepository'
import { ForbiddenError } from '../../errors/forbiddenError'
import { MangaGenreData } from '../../models/mangaModels'
import { NotFoundError } from '@prisma/client/runtime'

export const mangaAddGenreService = async (data: MangaGenreData, userId: string): Promise<any> => {
  const user = await findUserById(userId)
  if (!user?.is_admin) throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await findMangaById(data.mangaId)
  if (!manga) throw new NotFoundError('Este manga não existe!')
}
