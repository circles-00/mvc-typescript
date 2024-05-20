import { Column, Entity, OneToMany } from 'typeorm'
import { BaseModel } from './base.model'
import { ProductVariant } from './product-variant.model'
import { ProductOption } from './product-option.model'

@Entity()
export class Product extends BaseModel {
  @Column()
  name: string

  @Column()
  description: string

  @Column()
  basePrice: number

  @Column()
  image: string

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
  variants: ProductVariant[]

  @OneToMany(() => ProductOption, (productOption) => productOption.product)
  productOptions: ProductOption[]
}
