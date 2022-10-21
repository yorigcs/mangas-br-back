import { Manga, InsertMangaData } from '../models/mangaModels'
import { prisma } from '../database/prisma'

const findMangaById = async (id: string): Promise<Manga> => {
  return await prisma.manga.findFirst({ where: { id } })
}

const findMangaByName = async (name: string): Promise<Manga> => {
  return await prisma.manga.findFirst({ where: { name } })
}

const createManga = async (insertData: InsertMangaData): Promise<Manga> => {
  return await prisma.manga.create({ data: insertData })
}

const updateManga = async (id: string): Promise<Manga> => {
  return await prisma.manga.update({
    where: { id },
    data: { updated_at: new Date().toISOString() }
  })
}

const findAllMangasWithChapters = async (): Promise<any> => {
  return await prisma.manga.findMany(
    {
      orderBy: { updated_at: 'desc' },
      include: {
        Chapter: {
          orderBy: [
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

const findAllMangas = async (): Promise<any> => {
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

export { findMangaById, findMangaByName, createManga, updateManga, findAllMangasWithChapters, findAllMangas }
