import { IRouteHandler } from '@/controllers/types'
import { NextFunction, Request, Response } from 'express'

export const transformRouteArguments = (
  request: Request,
  response: Response,
  next: NextFunction,
  callback: (args: IRouteHandler) => void,
) => {
  callback({ request, response, next })
}
