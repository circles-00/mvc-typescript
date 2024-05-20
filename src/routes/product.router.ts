import { ProductController } from '@/controllers/product.controller'
import express from 'express'

const router = express.Router()

router.get('/', (...args) => new ProductController().getProducts(...args))

export const productRouter = router
