import { IRouteHandler } from './types'

export class ProductController {
  async getProducts({ response }: IRouteHandler) {
    response.render('pages/index')
  }
}
