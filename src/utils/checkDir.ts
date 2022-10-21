import fs from 'fs'
const checkDir = (path: string): void => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }
}

export { checkDir }
