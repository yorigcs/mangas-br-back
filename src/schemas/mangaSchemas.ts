import Joi from 'joi'

export const createMangaSchema = Joi.object({
  name: Joi.string().required().error(new Error('Você deve fornecer um nome válido!')),
  description: Joi.string().required().error(new Error('Você deve fornercer uma descrição!')),
  author: Joi.string().required().error(new Error('Você deve fornercer o nome do autor!'))
})
