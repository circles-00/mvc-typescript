import express from 'express'
import { logger, loggerMiddleware } from './middlewares'
import { env } from './utils'
import { productRouter } from './routes'
import { join } from 'path'

const app = express()

app.use(loggerMiddleware)

app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

app.use(express.static('public'))

app.use('/', productRouter)

app.listen(env.PORT, () => {
  logger.info('Server is running on port 3000')
})
