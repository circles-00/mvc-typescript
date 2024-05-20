import { env } from '@/utils'
import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: ['src/models/*.ts', 'dist/models/*js'],
  logging: env.NODE_ENV === 'development',
  synchronize: true,
})
