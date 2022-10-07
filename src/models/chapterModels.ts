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
  chapter_num: number
  manga_id: string
}
