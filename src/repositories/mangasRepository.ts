import { MangaData, Manga } from '../models/mangaModels'
import { prisma } from '../database/prisma'

export const findMangaById = async (id: string): Promise<Manga> => {
  return await prisma.manga.findFirst({ where: { id } })
}

export const findMangaByName = async (name: string): Promise<Manga> => {
  return await prisma.manga.findFirst({ where: { name } })
}

export const createManga = async (insertData: MangaData): Promise<Manga> => {
  return await prisma.manga.create({ data: insertData })
}
