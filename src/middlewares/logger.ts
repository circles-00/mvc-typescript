import { env } from '@/utils'
import pinoHttp from 'pino-http'

export const loggerMiddleware = pinoHttp({
  level: env.LOG_LEVEL,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  serializers: {
    req: ({ id, method, url, query, body, file }) => ({
      id,
      method,
      url,
      query,
      body,
      file,
    }),
  },
})

export const logger = loggerMiddleware.logger
