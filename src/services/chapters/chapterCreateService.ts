import { findMangaById } from '../../repositories/mangasRepository'
import { findUserById } from '../../repositories/usersRepository'

import { ForbiddenError } from '../../errors/forbiddenError'
import { ConflictError } from '../../errors/conflictError'
import { NotFoundError } from '../../errors/notFoundError'
import { ChapterData } from '../../models/chapterModels'
import { createChapter, findChapterBySeasonAndChapterNum } from '../../repositories/chaptersRepository'

export const chapterCreateService = async (data: ChapterData, userId: string): Promise<any> => {
  const user = await findUserById(userId)
  if (!user?.is_admin) throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await findMangaById(data.manga_id)
  if (!manga) throw new NotFoundError('Este manga não existe!')

  const chapter = await findChapterBySeasonAndChapterNum(data.season, data.chapter_num)
  if (chapter) throw new ConflictError('Este capítulo já existe nessa temporada!')

  return await createChapter(data)
}
