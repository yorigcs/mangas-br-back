import Joi from 'joi'

export const signUpSchema = Joi.object({
  email: Joi.string().email().required().error(new Error('Você deve fornecer um e-mail válido!')),
  password: Joi.string().required().error(new Error('Uma senha deve ser fornecida!')),
  passwordConfirmation: Joi.string().required().valid(Joi.ref('password')).error(new Error('A confirmação da senha deve ser igual!'))
})
