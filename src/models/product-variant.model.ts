import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Product } from './product.model'
import { BaseModel } from './base.model'
import { ProductOption } from './product-option.model'

@Entity()
export class ProductVariant extends BaseModel {
  @Column()
  variantName: string

  @Column()
  price: number

  @Column()
  image: string

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product

  @OneToMany(() => ProductOption, (productOption) => productOption.variant)
  options: ProductOption[]
}
