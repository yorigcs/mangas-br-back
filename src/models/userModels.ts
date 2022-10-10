
type Roles = 'admin' | 'user' | 'moderator'
export interface User {
  id: string
  name: string
  email: string
  password: string
  profile_picture: string | null
  role: Roles
  created_at: Date
  updated_at: Date
}

export interface InsertUserData {
  name: string
  email: string
  password: string
}

export interface LoginUserData {
  email: string
  password: string
}
