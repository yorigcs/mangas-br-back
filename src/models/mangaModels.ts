export interface Manga {
  id: string
  cover_picture: string
  name: string
  description: string
  author: string
  posted_by: string
  followed_by: number | null
  status: string | null
  rating: number | null
  created_at: Date
  updated_at: Date
}

export interface MangaData {
  name: string
  cover_picture: string
  description: string
  author: string
  posted_by: string
}