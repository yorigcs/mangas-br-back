import { Files } from '../models/files'
import fs from 'fs'
import path from 'path'

const handleSaveFiles = async (folderPath: string, files: Files): Promise<string[]> => {
  const links = []
  const oldPath = path.join(__dirname, '../public/uploads/temp')
  const newPath = path.join(__dirname, `../public/uploads/mangas/${folderPath}`)
  if (!fs.existsSync(newPath)) {
    fs.mkdirSync(newPath, { recursive: true })
  }
  for (const file of files) {
    fs.rename(`${oldPath}/${file.filename}`, `${newPath}/${file.filename}`, (err) => { console.log(err) })
    links.push(`http://localhost:5000/uploads/mangas/${folderPath}/${file.filename}`)
  }

  return links
}

export { handleSaveFiles }
