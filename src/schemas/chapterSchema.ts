import Joi from 'joi'

export const createChapter = Joi.object({
  name: Joi.string().required().error(new Error('Você deve fornecer um nome válido!')),
  season: Joi.number().integer().required().error(new Error('Você deve fornercer um número para a temporada!')),
  chapter_num: Joi.number().integer().required().error(new Error('Você deve fornercer um número para o capítulo!')),
  manga_id: Joi.string().required().error(new Error('Você deve fornercer um id válido de uma obra!'))

})
