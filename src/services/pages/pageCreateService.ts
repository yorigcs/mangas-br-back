import { findUserById } from '../../repositories/usersRepository'

import { ForbiddenError } from '../../errors/forbiddenError'
import { ConflictError } from '../../errors/conflictError'
import { NotFoundError } from '../../errors/notFoundError'
import { PageData } from '../../models/pageModels'
import { createPage, findPageByPageNumAndChapterId } from '../../repositories/pagesRepository'
import { findChapterById } from '../../repositories/chaptersRepository'

export const pageCreateService = async (data: PageData, userId: string): Promise<any> => {
  const user = await findUserById(userId)
  if (!user?.is_admin) throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const chapter = await findChapterById(data.chapter_id)
  if (!chapter) throw new NotFoundError('Este capítulo não existe!')

  for (let i = 0; i < data.page_img.length; i++) {
    const page = findPageByPageNumAndChapterId(i + 1, data.chapter_id)
    if (page) throw new ConflictError(`A página ${1 + i} já existe nesse capítulo!`)
    await createPage(
      {
        chapter_id: data.chapter_id,
        name: `Página ${i + 1}`,
        page_num: i + 1,
        page_img: data.page_img[i]
      }
    )
  }
}
