import { UnauthorizedError } from '../../errors/unauthorizedError'
import { findUserByEmail } from '../../repositories/usersRepository'
import { LoginUserData } from '../../models/userModels'
import { compare } from '../../utils/bcryptAdapter'
import { createToken } from '../../utils/jwtTokenAdapter'

export const userLoginService = async (data: LoginUserData): Promise<any> => {
  const user = await findUserByEmail(data.email)
  if (!user || !compare(data.password, user?.password)) throw new UnauthorizedError('Email ou senha incorretos!')

  const token = createToken(user.id)

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      profilePicture: user.profile_picture,
      isAdmin: user.is_admin,
      isModerator: user.is_moderator
    },
    token
  }
}
