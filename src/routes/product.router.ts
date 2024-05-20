import { ProductController } from '@/controllers'
import { uploadMiddleware } from '@/middlewares'
import express from 'express'

const router = express.Router()

router.get('/', (request, response, next) =>
  new ProductController().renderGetProducts({ request, response, next }),
)

router.get('/view', (request, response, next) =>
  new ProductController().renderViewProduct({ request, response, next }),
)

router.get('/create', (request, response, next) =>
  new ProductController().renderCreateProduct({ request, response, next }),
)

router.get('/edit', (request, response, next) =>
  new ProductController().renderEditProduct({ request, response, next }),
)

router.post(
  '/api/product',
  uploadMiddleware.single('image'),
  (request, response, next) =>
    new ProductController().createProduct({ request, response, next }),
)

router.post(
  '/api/product/update',
  uploadMiddleware.single('image'),
  (request, response, next) =>
    new ProductController().updateProduct({ request, response, next }),
)

router.delete('/api/product', (request, response, next) =>
  new ProductController().deleteProduct({ request, response, next }),
)

export const productRouter = router
