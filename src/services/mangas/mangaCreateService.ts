import { ConflictError } from '../../errors/conflictError'
import { findMangaByName } from '../../repositories/mangasRepository'
import { InsertMangaData } from '../../models/mangaModels'

export const createMangaService = async (data: InsertMangaData): Promise<any> => {
  const manga = await findMangaByName(data.name)
  if (manga) throw new ConflictError('Este manga já está cadastrado!')
  return 'ok'
}
