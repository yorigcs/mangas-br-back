import Joi from 'joi'

export const genreSchema = Joi.object({
  mangaId: Joi.string().required(),
  genres: Joi.array().items(Joi.string().valid(
    'Ação', 'Adulto', 'Artes Marciais', 'Aventura', 'Comédia', 'Demônios',
    'Doujinshi', 'Drama', 'Ecchi', 'Escolar', 'Esportes', 'Fantasia',
    'Gastronomia', 'Harém', 'Hentai', 'Histório', 'Horror', 'Isekai',
    'Jogos', 'Josei', 'Magia', 'Mechas', 'Militar', 'Mistério',
    'Música', 'One Shot', 'Psicológico', 'Romance', 'Samurai', 'Sci-Fi',
    'Seinen', 'Shoujo', 'Shounen', 'Slice of Life', 'Sobrenatural', 'Suspense',
    'Vampiro', 'Yuri'
  ).required()).required()
})
