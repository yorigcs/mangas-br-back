import dotenv from 'dotenv'

import { Files } from '../models/files'
import { saveLocalFiles } from './saveLocalFiles'
import { saveSupaBaseFiles } from './saveSupaBaseFiles'

dotenv.config()

const handleSaveFiles = async (folderPath: string, files: Files): Promise<string[]> => {
  const uploadType = process.env.UPLOAD_TYPE || 'local'
  let links = null
  if (uploadType === 'local') {
    links = await saveLocalFiles(folderPath, files)
  } else {
    links = await saveSupaBaseFiles(folderPath, files)
  }
  return links
}

export { handleSaveFiles }
