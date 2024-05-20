import { z } from 'zod'

const zNumber = z
  .string()
  .transform((value) => Number.parseInt(value))
  .refine((value) => !Number.isNaN(value))

const envSchema = z.object({
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
    .default('info'),
  PORT: zNumber.default('3000'),
})

export const env = envSchema.parse(process.env)
