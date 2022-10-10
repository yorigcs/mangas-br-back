import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SECRET = process.env.JWT_SECRET || 'secret'
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

interface Decoded {
  id: string
  iat: number
  exp: number

}

const createToken = (id: string): string => {
  return jwt.sign({ id }, SECRET, { expiresIn: EXPIRES_IN })
}

const verifyToken = (token: string): Decoded => {
  try {
    const decoded = jwt.verify(token, SECRET) as Decoded
    return decoded
  } catch (error) {
    return null
  }
}

export { createToken, verifyToken }
