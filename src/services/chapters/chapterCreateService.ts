import { findMangaById, updateManga } from '../../repositories/mangasRepository'
import { findUserById } from '../../repositories/usersRepository'

import { ForbiddenError } from '../../errors/forbiddenError'
import { ConflictError } from '../../errors/conflictError'
import { NotFoundError } from '../../errors/notFoundError'
import { ChapterData } from '../../models/chapterModels'
import { createChapter, findChapterBySeasonAndChapterNum } from '../../repositories/chaptersRepository'

export const chapterCreateService = async (data: ChapterData, userId: string): Promise<any> => {
  const user = await findUserById(userId)
  if (!user?.is_admin) throw new ForbiddenError('Você não tem permissão para acessar essa rota!')

  const manga = await findMangaById(data.mangaId)
  if (!manga) throw new NotFoundError('Este manga não existe!')

  const chapter = await findChapterBySeasonAndChapterNum(data.season, data.chapterNum)
  if (chapter) throw new ConflictError('Este capítulo já existe nessa temporada!')

  const createdChapter = await createChapter(
    {
      name: data.name,
      chapter_num: data.chapterNum,
      manga_id: data.mangaId,
      season: data.season
    }
  )
  await updateManga(data.mangaId)
  return createdChapter
}
