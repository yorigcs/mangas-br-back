import Joi from 'joi'

export const createPageSchema = Joi.object({
  page_img: Joi.array().items(Joi.string().pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/).required()).required().error(new Error('Você deve fornecer um array de links de  imagem válida!')),
  chapter_id: Joi.string().required().error(new Error('Você deve fornercer um id de um capítulo válido!'))
})
