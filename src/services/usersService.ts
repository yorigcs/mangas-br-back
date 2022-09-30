import { ConflictError } from '../errors/conflictError'
import { createUser, findUserByEmail } from '../repositories/usersRepository'
import { InsertUserData } from '../models/userModels'

export const createUserService = async (data: InsertUserData): Promise<any> => {
  const user = await findUserByEmail(data.email)
  if (user) throw new ConflictError('Este usuário já está cadastrado!')

  return await createUser(data)
}
