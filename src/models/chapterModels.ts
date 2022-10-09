export interface Chapter {
  id: string
  name: string
  season: number
  chapter_num: number
  created_at: Date
  updated_at: Date
  manga_id: string
}

export interface ChapterData {
  name: string
  season: number
  chapterNum: number
  mangaId: string
}

export interface InsertChapterData {
  name: string
  season: number
  chapter_num: number
  manga_id: string
}
