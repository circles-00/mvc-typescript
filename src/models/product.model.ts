import { Column, Entity } from 'typeorm'
import { BaseEntity } from './base.model'

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  inventory: number
}
