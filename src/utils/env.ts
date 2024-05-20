import { z } from 'zod'

const zString = z.string().min(1)

const zNumber = z
  .string()
  .transform((value) => Number.parseInt(value))
  .refine((value) => !Number.isNaN(value))

const envSchema = z.object({
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
    .default('info'),
  PORT: zNumber.default('3000'),
  NODE_ENV: zString,
  DB_HOST: zString,
  DB_NAME: zString,
  DB_USER: zString,
  DB_PASSWORD: zString,
  DB_PORT: zNumber,
})

export const env = envSchema.parse(process.env)
