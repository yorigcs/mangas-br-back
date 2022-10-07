import Joi from 'joi'

export const createMangaSchema = Joi.object({
  name: Joi.string().required().error(new Error('Você deve fornecer um nome válido!')),
  cover_picture: Joi.string().pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/).required().error(new Error('Você deve fornecer um link de  imagem válida!')),
  description: Joi.string().required().error(new Error('Você deve fornercer uma descrição!')),
  author: Joi.string().required().error(new Error('Você deve fornercer o nome do autor!')),
  posted_by: Joi.string().required().error(new Error('Você deve fornercer o nome de quem postou!'))

})