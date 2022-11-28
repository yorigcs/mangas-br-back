import * as mangaRepository from '../repositories/mangasRepository'
import * as usersRepository from '../repositories/usersRepository'

import * as chapterRepository from '../repositories/chaptersRepository'

import { ForbiddenError } from '../errors/forbiddenError'
import { ConflictError } from '../errors/conflictError'
import { NotFoundError } from '../errors/notFoundError'
import { ChapterData } from '../models/chapterModels'

const chapterCreate = async (data: ChapterData, userId: string): Promise<any> => {
  const user = await usersRepository.findUserById(userId)
  if (user?.role !== 'admin') throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await mangaRepository.findMangaById(data.mangaId)
  if (!manga) throw new NotFoundError('Este manga não existe!')

  const chapter = await chapterRepository.findChapterByMangaIdAndChapterNum(data.chapterNum, data.mangaId)
  if (chapter) throw new ConflictError('Este capítulo já existe nessa obra!')

  const createdChapter = await chapterRepository.createChapter(
    {
      name: data.name,
      chapter_num: data.chapterNum,
      manga_id: data.mangaId

    }
  )
  await mangaRepository.updateManga(data.mangaId)
  return createdChapter
}

export { chapterCreate }
