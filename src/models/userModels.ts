export interface User {
  id: string
  name: string
  email: string
  password: string
  profile_picture: string | null
  is_admin: boolean
  is_moderator: boolean
  created_at: Date
  updated_at: Date
}

export interface InserUserData {
  name: string
  email: string
  password: string
}
