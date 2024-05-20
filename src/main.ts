import express from 'express'
import { logger, loggerMiddleware } from './middlewares'
import { env } from './utils'
import { productRouter } from './routes'
import { join } from 'path'
import { dataSource } from './config/database'
import bodyParser from 'body-parser'

dataSource
  .initialize()
  .then(() => {
    logger.info('Data Source has been succcessfully initialized!')
  })
  .catch((err) => {
    logger.error('Error during Data Source initialization:')
    logger.error(err)
    process.exit(-1)
  })

const app = express()

app.use(loggerMiddleware)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

app.use(express.static('public'))

app.use('/', productRouter)

app.listen(env.PORT, () => {
  logger.info(`Server is running on port ${env.PORT}`)
})
