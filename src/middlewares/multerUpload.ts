import multer, { FileFilterCallback } from 'multer'
import { Request, Response, NextFunction } from 'express'
import path from 'path'
import crypto from 'crypto'
import { checkDir } from '../utils/checkDir'

const dest = path.join(__dirname, '../public/uploads/temp')

const whiteList = [
  'image/png',
  'image/jpeg',
  'image/jpg'
]
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    checkDir(dest)
    cb(null, dest)
  },
  filename: function (_req, file, cb) {
    crypto.randomBytes(16, (err, hash) => {
      if (err) return

      const fileName = `${hash.toString('hex')}${file.originalname.match(/\..*$/)[0]}`

      cb(null, fileName)
    })
  }
})

const config = {
  storage,
  fileFilter: (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (!whiteList.includes(file.mimetype)) {
      return cb(new Error('Apenas imagens nos formatos png,jpeg e jpg são permitidas!'))
    }
    cb(null, true)
  }
}

export const multerUpload = (filesMax = 1): any => {
  const upload = multer(config).array('images', filesMax)
  return (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, (err: any): any => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message })
      } else if (!req.files) {
        return res.status(400).json({ error: 'Você deve enviar pelo menos uma imagem!' })
      } else if (err) {
        return res.status(400).json({ error: err.message })
      } else {
        return next()
      }
    })
  }
}
