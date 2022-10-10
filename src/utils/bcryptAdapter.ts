import bcrypt from 'bcrypt'

const hash = (value: string, salt: number): string => bcrypt.hashSync(value, salt)

const compare = (value: string, valueToCompare: string): boolean => bcrypt.compareSync(value, valueToCompare)

export { hash, compare }
