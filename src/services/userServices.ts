
import * as usersRepository from '../repositories/usersRepository'

import { ConflictError } from '../errors/conflictError'
import { UnauthorizedError } from '../errors/unauthorizedError'

import { InsertUserData, LoginUserData } from '../models/userModels'

import { hash, compare } from '../utils/bcryptAdapter'
import { createToken } from '../utils/jwtTokenAdapter'

const createUser = async (data: InsertUserData): Promise<any> => {
  const user = await usersRepository.findUserByEmail(data.email)
  if (user) throw new ConflictError('Este usuário já está cadastrado!')

  const salt = 12
  const userCreated = await usersRepository.createUser(Object.assign({}, data, { password: hash(data.password, salt) }))
  const {
    password,
    profile_picture: profilePicture,
    created_at: createdAt,
    updated_at: updatedAt
    , ...userData
  } = userCreated
  return userData
}

const userLogin = async (data: LoginUserData): Promise<any> => {
  const user = await usersRepository.findUserByEmail(data.email)
  if (!user || !compare(data.password, user?.password)) throw new UnauthorizedError('Email ou senha incorretos!')

  const token = createToken(user.id)

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      profilePicture: user.profile_picture,
      role: user.role
    },
    token
  }
}

export { createUser, userLogin }
