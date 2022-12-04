import * as chaptersRepository from '../repositories/chaptersRepository'
import * as usersRepository from '../repositories/usersRepository'
import * as pagesRepository from '../repositories/pagesRepository'
import * as mangasRepository from '../repositories/mangasRepository'

import { PageData } from '../models/pageModels'
import { Files } from '../models/files'

import { ForbiddenError } from '../errors/forbiddenError'
import { ConflictError } from '../errors/conflictError'
import { NotFoundError } from '../errors/notFoundError'
import { handleSaveFiles } from '../utils/handleSaveFiles'

const pageCreate = async (data: PageData, userId: string, files: Files): Promise<any> => {
  const user = await usersRepository.findUserById(userId)
  if (user?.role !== 'admin') throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const chapter = await chaptersRepository.findChapterById(data.chapter_id)
  if (!chapter) throw new NotFoundError('Este capítulo não existe!')

  const manga = await mangasRepository.findMangaById(chapter.manga_id)

  for (let i = 0; i < files.length; i++) {
    const page = await pagesRepository.findPageByPageNumAndChapterId(i + 1, data.chapter_id)
    if (page) throw new ConflictError('Este capítulo já possui páginas')
  }

  const urls = await handleSaveFiles(`mangas/${manga.name.split(' ').join('-').toLowerCase()}/chapter-${chapter.chapter_num}`, files)

  for (let i = 0; i < urls.length; i++) {
    await pagesRepository.createPage(
      {
        chapter_id: data.chapter_id,
        name: `Página ${i + 1}`,
        page_num: i + 1,
        page_img: urls[i]
      }
    )
  }
}

export { pageCreate }
