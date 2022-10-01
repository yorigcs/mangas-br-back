import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SECRET = process.env.JWT_SECRET || 'secret'
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

export const createToken = (id: string): string => {
  return jwt.sign({ id }, SECRET, { expiresIn: EXPIRES_IN })
}

export const verifyToken = (token: string): string => {
  try {
    const decoded = jwt.verify(token, SECRET) as any
    return decoded
  } catch (error) {
    return null
  }
}
