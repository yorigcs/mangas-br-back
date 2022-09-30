import { User } from '@prisma/client'
import { prisma } from '../database/prisma'

export type TInsertData = Omit<User, 'id'>

export const findUserById = async (id: string): Promise<User> => {
  return await prisma.user.findFirst({ where: { id } })
}

export const findUserByEmail = async (email: string): Promise<User> => {
  return await prisma.user.findFirst({ where: { email } })
}

export const findAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany()
}

export const findAllModerators = async (): Promise<User[]> => {
  return await prisma.user.findMany({ where: { is_moderator: true } })
}

export const findAllAdmins = async (): Promise<User[]> => {
  return await prisma.user.findMany({ where: { is_admin: true } })
}

export const createUser = async (insertData: TInsertData): Promise<User> => {
  return await prisma.user.create({ data: insertData })
}
