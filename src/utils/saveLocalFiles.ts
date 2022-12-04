import { rename } from 'fs'
import path from 'path'
import dotenv from 'dotenv'

import { Files } from '../models/files'
import { checkDir } from './checkDir'

dotenv.config()

const saveLocalFiles = async (folderPath: string, files: Files): Promise<string[]> => {
  const port = process.env.PORT || 5000
  const links = []
  const oldPath = path.join(__dirname, '../public/temp')
  const newPath = path.join(__dirname, `../public/${folderPath}`)
  checkDir(newPath)
  for (const file of files) {
    rename(`${oldPath}/${file.filename}`, `${newPath}/${file.filename}`, (err) => {
      if (err !== null) console.log('Error')
    })
    links.push(`http://localhost:${port}/${folderPath}/${file.filename}`)
  }
  return links
}

export { saveLocalFiles }
