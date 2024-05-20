import { NextFunction, Request, Response } from 'express'

export interface IRouteHandler {
  request: Request
  response: Response
  next: NextFunction
}
