import express from 'express'
import setUpMiddlewares from './configExpress/middlewares'
import setUpRoutes from './configExpress/routes'
import 'express-async-errors'
import { errorsHandler } from './middlewares/errorsHandler'
const app = express()

setUpMiddlewares(app)
setUpRoutes(app)

app.use(errorsHandler)

export default app
