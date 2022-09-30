import { User, InsertUserData } from '../models/userModels'
import { prisma } from '../database/prisma'

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

export const createUser = async (insertData: InsertUserData): Promise<User> => {
  return await prisma.user.create({ data: insertData })
}
