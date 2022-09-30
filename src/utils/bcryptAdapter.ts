import bcrypt from 'bcrypt'

export const hash = (value: string, salt: number): string => bcrypt.hashSync(value, salt)

export const compare = (value: string, valueToCompare: string): boolean => bcrypt.compareSync(value, valueToCompare)
