export interface Manga {
  id: string
  cover_picture: string
  name: string
  description: string
  author: string
  posted_by: string
  followed_by: number
  status: string
  rating: number
  created_at: Date
  updated_at: Date
}

export interface InsertMangaData {
  name: string
  cover_picture: string
  description: string
  author: string
  posted_by: string
  genres: string[]
}
