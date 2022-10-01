import { UnauthorizedError } from '../../errors/unauthorizedError'
import { findUserByEmail } from '../../repositories/usersRepository'
import { LoginUserData } from '../../models/userModels'
import { compare } from '../../utils/bcryptAdapter'

export const userLoginService = async (data: LoginUserData): Promise<any> => {
  const user = await findUserByEmail(data.email)
  if (!user || !compare(data.password, user?.password)) throw new UnauthorizedError('Email ou senha incorretos!')
}
