import multer from 'multer'
import { Request, Response, NextFunction } from 'express'
import path from 'path'
import crypto from 'crypto'
import { checkDir } from '../utils/checkDir'

const dest = path.join(__dirname, '../public/uploads/temp')

const storage = multer.diskStorage({
  destination: function (_req, file, cb) {
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

const upload = multer({ storage }).array('images', 100)

export const multerUpload = (req: Request, res: Response, next: NextFunction): void => {
  upload(req, res, (err: any): any => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send(err.message)
    } else if (err) {
      return res.status(400).send(err.message)
    } else {
      return next()
    }
  })
}
