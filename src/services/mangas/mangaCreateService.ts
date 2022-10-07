import { ConflictError } from '../../errors/conflictError'
import { findMangaByName, createManga } from '../../repositories/mangasRepository'
import { MangaData } from '../../models/mangaModels'

export const createMangaService = async (data: MangaData): Promise<any> => {
  const manga = await findMangaByName(data.name)
  if (manga) throw new ConflictError('Este manga já está cadastrado!')
  const { genres, ...insertMangaData } = data

  const mangaCreation = await createManga(insertMangaData)

  return mangaCreation
}
