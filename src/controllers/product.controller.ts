import { ProductService } from '@/services'
import { IRouteHandler } from './types'

export class ProductController {
  constructor(private readonly productService = new ProductService()) {}

  async renderGetProducts({ response }: IRouteHandler) {
    const columns = this.productService.getProductColumns()
    const products = await this.productService.getProducts()

    response.render('pages/index', {
      columns,
      products,
    })
  }

  async renderViewProduct({ request, response }: IRouteHandler) {
    const { id } = request.query
    const productId = Number.parseInt(id as string)

    if (Number.isNaN(productId)) {
      return response.status(400).json({ message: 'Invalid product id' })
    }

    const productFromDb = await this.productService.getProductById(productId)

    response.render('pages/view', {
      data: productFromDb,
    })
  }

  async renderCreateProduct({ response }: IRouteHandler) {
    response.render('pages/create')
  }

  async renderEditProduct({ request, response }: IRouteHandler) {
    const { id } = request.query
    const productId = Number.parseInt(id as string)

    if (Number.isNaN(productId)) {
      return response.status(400).json({ message: 'Invalid product id' })
    }

    const productFromDb = await this.productService.getProductById(productId)

    response.render('pages/create', {
      data: productFromDb,
    })
  }

  async createProduct({ request, response }: IRouteHandler) {
    await this.productService.createOrUpdateProduct({
      ...request.body,
      image: `uploads/${request.file?.filename}`, // TODO: move the directory path in a constant
    })

    response.redirect('/')
  }

  async updateProduct({ request, response }: IRouteHandler) {
    const { id } = request.query
    const productId = Number.parseInt(id as string)

    if (Number.isNaN(productId)) {
      return response.status(400).json({ message: 'Invalid product id' })
    }

    await this.productService.createOrUpdateProduct({
      ...request.body,
      id: productId,
      image: request?.file ? `uploads/${request.file?.filename}` : undefined, // TODO: move the directory path in a constant
    })

    response.redirect('/')
  }

  async deleteProduct({ request, response }: IRouteHandler) {
    const { id } = request.query
    const productId = Number.parseInt(id as string)

    if (Number.isNaN(productId)) {
      return response.status(400).json({ message: 'Invalid product id' })
    }

    await this.productService.deleteProduct(productId)

    response.redirect(303, '/')
  }
}
