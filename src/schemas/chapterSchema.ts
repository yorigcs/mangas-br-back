import Joi from 'joi'

export const createChapter = Joi.object({
  name: Joi.string().required().error(new Error('Você deve fornecer um nome válido!')),
  season: Joi.number().integer().required().error(new Error('Você deve fornercer um número para a temporada!')),
  chapterNum: Joi.number().integer().required().error(new Error('Você deve fornercer um número para o capítulo!')),
  mangaId: Joi.string().required().error(new Error('Você deve fornercer um id válido de uma obra!'))

})
