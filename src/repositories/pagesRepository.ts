import { Page, InsertPageData } from '../models/pageModels'
import { prisma } from '../database/prisma'

export const createPage = async (insertData: InsertPageData): Promise<Page> => {
  return await prisma.page.create({ data: insertData })
}

export const findPageByPageNumAndChapterId = async (pageNum: number, chapterId: string): Promise<Page> => {
  return await prisma.page.findFirst({ where: { AND: [{ page_num: pageNum }, { chapter_id: chapterId }] } })
}
