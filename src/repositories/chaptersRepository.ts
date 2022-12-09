import { Chapter, InsertChapterData } from '../models/chapterModels'
import { prisma } from '../database/prisma'

const createChapter = async (insertData: InsertChapterData): Promise<Chapter> => {
  return await prisma.chapter.create({ data: insertData })
}

const findChapterByMangaIdAndChapterNum = async (chapterNum: number, mangaId: string): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { chapter_num: chapterNum, manga_id: mangaId } })
}

const findChapterByMangaIdAndChapterName = async (chapterName: string, mangaId: string): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { name: chapterName, manga_id: mangaId } })
}

const findChapterById = async (id: string): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { id } })
}

export { createChapter, findChapterByMangaIdAndChapterNum, findChapterById, findChapterByMangaIdAndChapterName }
