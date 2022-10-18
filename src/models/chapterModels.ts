export interface Chapter {
  id: string
  name: string
  price?: number
  chapter_num: number
  created_at: Date
  updated_at: Date
  manga_id: string
}

export interface ChapterData {
  name: string
  chapterNum: number
  mangaId: string
}

export interface InsertChapterData {
  name: string
  chapter_num: number
  manga_id: string
}
