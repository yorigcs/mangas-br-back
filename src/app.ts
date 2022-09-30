import express from 'express'
import setUpMiddlewares from './configExpress/middlewares'
import setUpRoutes from './configExpress/routes'

const app = express()

setUpMiddlewares(app)
setUpRoutes(app)

export default app
