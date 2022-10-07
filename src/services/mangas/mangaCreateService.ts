import { ConflictError } from '../../errors/conflictError'
import { findMangaByName, createManga } from '../../repositories/mangasRepository'
import { MangaData } from '../../models/mangaModels'
import { findUserById } from '../../repositories/usersRepository'
import { ForbiddenError } from '../../errors/forbiddenError'

export const createMangaService = async (data: MangaData, userId: string): Promise<any> => {
  const user = await findUserById(userId)
  if (!user?.is_admin) throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await findMangaByName(data.name)
  if (manga) throw new ConflictError('Este manga já está cadastrado!')

  const mangaCreation = await createManga(data)

  return mangaCreation
}
