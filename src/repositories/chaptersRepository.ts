import { Chapter, InsertChapterData } from '../models/chapterModels'
import { prisma } from '../database/prisma'

const createChapter = async (insertData: InsertChapterData): Promise<Chapter> => {
  return await prisma.chapter.create({ data: insertData })
}

const findChapterBySeasonAndChapterNum = async (season: number, chapterNum: number): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { AND: [{ season }, { chapter_num: chapterNum }] } })
}

const findChapterById = async (id: string): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { id } })
}

export { createChapter, findChapterBySeasonAndChapterNum, findChapterById }
