import { Manga, InsertMangaData } from '../models/mangaModels'
import { prisma } from '../database/prisma'

export const findMangaById = async (id: string): Promise<Manga> => {
  return await prisma.manga.findFirst({ where: { id } })
}

export const findMangaByName = async (name: string): Promise<Manga> => {
  return await prisma.manga.findFirst({ where: { name } })
}

export const createManga = async (insertData: InsertMangaData): Promise<Manga> => {
  return await prisma.manga.create({ data: insertData })
}

export const updateManga = async (id: string): Promise<Manga> => {
  return await prisma.manga.update({
    where: { id },
    data: { updated_at: new Date().toISOString() }
  })
}

export const getAllMangasWithChapters = async (): Promise<any> => {
  return await prisma.manga.findMany(
    {
      orderBy: { updated_at: 'desc' },
      include: {
        Chapter: {
          orderBy: [
            {
              season: 'desc'
            },
            {
              chapter_num: 'desc'
            }
          ]
        },
        GenreManga: {
          select: {
            genre_id: true,
            genre: {
              select: {
                name: true
              }
            }
          }
        }
      }
    }
  )
}

export const getAllMangas = async (): Promise<any> => {
  return await prisma.manga.findMany(
    {
      include: {
        GenreManga: {
          select: {
            genre_id: true,
            genre: {
              select: {
                name: true
              }
            }
          }
        }
      }
    }
  )
}
