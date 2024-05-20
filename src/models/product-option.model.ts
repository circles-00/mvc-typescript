import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseModel } from './base.model'
import { ProductOptionValue } from './product-option-value.model'
import { Product } from './product.model'
import { ProductVariant } from './product-variant.model'

@Entity()
export class ProductOption extends BaseModel {
  @Column()
  name: string

  @ManyToOne(() => Product, (product) => product.productOptions)
  product: Product

  @ManyToOne(() => ProductVariant, (productVariant) => productVariant.options)
  variant: ProductVariant

  @OneToMany(
    () => ProductOptionValue,
    (productOptionValue) => productOptionValue.productOption,
  )
  optionValues: ProductOptionValue[]
}
