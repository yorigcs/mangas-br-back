import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import { createReadStream, unlinkSync } from 'fs'

import { Files } from '../models/files'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const saveSupaBaseFiles = async (folderPath: string, files: Files): Promise<string[]> => {
  const links = []
  const mainFolder = folderPath.split('/')[0]
  const subFolders = folderPath.split('/').filter(folder => folder !== mainFolder).join('/')
  const { data: bucketInfo } = await supabase.storage.getBucket(mainFolder)
  if (!bucketInfo) {
    await supabase.storage.createBucket(mainFolder, { public: true })
  }

  for (const file of files) {
    const toStream = createReadStream(file.path)
    const pathToSave = `${subFolders}/${file.filename}`
    await supabase.storage.from(mainFolder).upload(pathToSave, toStream, { cacheControl: '3600', upsert: false, contentType: file.mimetype })
    unlinkSync(file.path)
    const { data: { publicUrl: link } } = supabase.storage.from(mainFolder).getPublicUrl(pathToSave)
    links.push(link)
  }
  return links
}

export { saveSupaBaseFiles }
