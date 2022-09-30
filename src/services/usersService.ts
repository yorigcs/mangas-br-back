import { ConflictError } from '../errors/conflictError'
import { findUserByEmail } from '../repositories/usersRepository'
import { InserUserData } from '../models/userModels'
export const createUserService = async (data: InserUserData): Promise<any> => {
  const user = await findUserByEmail(data.email)
  if (user) {
    throw new ConflictError('Este usuário já está cadastrado!')
  }
}
