import * as chaptersRepository from '../repositories/chaptersRepository'
import * as usersRepository from '../repositories/usersRepository'
import * as pagesRepository from '../repositories/pagesRepository'

import { PageData } from '../models/pageModels'

import { ForbiddenError } from '../errors/forbiddenError'
import { ConflictError } from '../errors/conflictError'
import { NotFoundError } from '../errors/notFoundError'

const pageCreate = async (data: PageData, userId: string): Promise<any> => {
  const user = await usersRepository.findUserById(userId)
  if (user?.role !== 'admin') throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const chapter = await chaptersRepository.findChapterById(data.chapter_id)
  if (!chapter) throw new NotFoundError('Este capítulo não existe!')

  for (let i = 0; i < data.page_img.length; i++) {
    const page = pagesRepository.findPageByPageNumAndChapterId(i + 1, data.chapter_id)
    if (page) throw new ConflictError(`A página ${1 + i} já existe nesse capítulo!`)
    await pagesRepository.createPage(
      {
        chapter_id: data.chapter_id,
        name: `Página ${i + 1}`,
        page_num: i + 1,
        page_img: data.page_img[i]
      }
    )
  }
}

export { pageCreate }
