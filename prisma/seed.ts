import { prisma } from '../src/database/prisma'

async function main (): Promise<void> {
  const genres: string[] =
  [
    'Ação', 'Adulto', 'Artes Marciais', 'Aventura', 'Comédia', 'Demônios',
    'Doujinshi', 'Drama', 'Ecchi', 'Escolar', 'Esportes', 'Fantasia',
    'Gastronomia', 'Harém', 'Hentai', 'Histório', 'Horror', 'Isekai',
    'Jogos', 'Josei', 'Magia', 'Mechas', 'Militar', 'Mistério',
    'Música', 'One Shot', 'Psicológico', 'Romance', 'Samurai', 'Sci-Fi',
    'Seinen', 'Shoujo', 'Shounen', 'Slice of Life', 'Sobrenatural', 'Suspense',
    'Vampiro', 'Yuri'
  ]
  for (const genre of genres) {
    const result = await prisma.genre.findFirst({ where: { name: genre } })
    if (!result) {
      await prisma.genre.create({ data: { name: genre } })
    }
  }
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
