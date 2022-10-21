import express from 'express'
import path from 'path'

export const staticPublic = express.static(path.join(__dirname, '../../public'))
