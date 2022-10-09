import { Chapter, InsertChapterData } from '../models/chapterModels'
import { prisma } from '../database/prisma'

export const createChapter = async (insertData: InsertChapterData): Promise<Chapter> => {
  return await prisma.chapter.create({ data: insertData })
}

export const findChapterBySeasonAndChapterNum = async (season: number, chapterNum: number): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { AND: [{ season }, { chapter_num: chapterNum }] } })
}

export const findChapterById = async (id: string): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { id } })
}
