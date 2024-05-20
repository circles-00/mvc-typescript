import { ProductController } from '@/controllers'
import { transformRouteArguments } from './utils'
import express from 'express'

const router = express.Router()

router.get('/', (...args) =>
  transformRouteArguments(...args, new ProductController().getProducts),
)

export const productRouter = router
