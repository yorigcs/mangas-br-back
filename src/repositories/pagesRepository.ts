import { Page, InsertPageData } from '../models/pageModels'
import { prisma } from '../database/prisma'

const createPage = async (insertData: InsertPageData): Promise<Page> => {
  return await prisma.page.create({ data: insertData })
}

const findPageByPageNumAndChapterId = async (pageNum: number, chapterId: string): Promise<Page> => {
  return await prisma.page.findFirst({ where: { AND: [{ page_num: pageNum }, { chapter_id: chapterId }] } })
}

const findPagesByChapterId = async (chapterId: string): Promise<Page[]> => {
  return await prisma.page.findMany({ where: { chapter_id: chapterId } })
}

export { createPage, findPageByPageNumAndChapterId, findPagesByChapterId }
