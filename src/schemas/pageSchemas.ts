import Joi from 'joi'

export const createPageSchema = Joi.object({
  chapter_id: Joi.string().required().error(new Error('Você deve fornercer um id de um capítulo válido!'))
})
