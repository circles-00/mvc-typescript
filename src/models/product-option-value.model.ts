import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseModel } from './base.model'
import { ProductOption } from './product-option.model'

@Entity()
export class ProductOptionValue extends BaseModel {
  @Column()
  value: string

  @ManyToOne(() => ProductOption, (productOption) => productOption.optionValues)
  productOption: ProductOption
}
