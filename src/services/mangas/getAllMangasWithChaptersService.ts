
import { getAllMangasWithChapters } from '../../repositories/mangasRepository'

export const getAllMangasWithChaptersService = async (): Promise<any> => {
  return await getAllMangasWithChapters()
}
