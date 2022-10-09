
import { getAllMangas } from '../../repositories/mangasRepository'

export const getAllMangasService = async (): Promise<any> => {
  return await getAllMangas()
}
