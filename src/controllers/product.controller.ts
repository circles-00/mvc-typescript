import { NextFunction, Request, Response } from 'express'

export class ProductController {
  constructor() {}

  getProducts(req: Request, res: Response, next: NextFunction) {
    req.log.info({ req, res, next })

    res.render('pages/index')
  }
}
