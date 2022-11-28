export interface Page {
  id: string
  name: string
  page_img: string
  page_num: number
  chapter_id: string
  created_at: Date
  updated_at: Date

}

export interface InsertPageData {
  name: string
  page_img: string
  page_num: number
  chapter_id: string
}

export interface PageData {
  chapter_id: string
}
