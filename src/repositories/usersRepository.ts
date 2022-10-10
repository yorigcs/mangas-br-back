import { User, InsertUserData } from '../models/userModels'
import { prisma } from '../database/prisma'

const findUserById = async (id: string): Promise<User> => {
  return await prisma.user.findFirst({ where: { id } })
}

const findUserByEmail = async (email: string): Promise<User> => {
  return await prisma.user.findFirst({ where: { email } })
}

const findAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany()
}

const findAllModerators = async (): Promise<User[]> => {
  return await prisma.user.findMany({ where: { is_moderator: true } })
}

const findAllAdmins = async (): Promise<User[]> => {
  return await prisma.user.findMany({ where: { is_admin: true } })
}

const createUser = async (insertData: InsertUserData): Promise<User> => {
  return await prisma.user.create({ data: insertData })
}
export { findUserById, findUserByEmail, findAllUsers, findAllModerators, findAllAdmins, createUser }
