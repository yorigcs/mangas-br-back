import { ConflictError } from '../errors/conflictError'
import { createUser, findUserByEmail } from '../repositories/usersRepository'
import { InsertUserData } from '../models/userModels'
import { hash } from '../utils/bcryptAdapter'

export const createUserService = async (data: InsertUserData): Promise<any> => {
  const user = await findUserByEmail(data.email)
  if (user) throw new ConflictError('Este usuário já está cadastrado!')

  const salt = 12
  const userCreated = await createUser(Object.assign({}, data, { password: hash(data.password, salt) }))
  const {
    password,
    profile_picture: profilePicture,
    is_admin: isAdmin,
    is_moderator: isModerator,
    created_at: createdAt,
    updated_at: updatedAt
    , ...userData
  } = userCreated
  return userData
}
