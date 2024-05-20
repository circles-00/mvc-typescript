import { Product } from '@/models'
import { dataSource } from '@/config'
import { unlink } from 'fs/promises'

export class ProductService {
  constructor(
    private readonly productRepository = dataSource.getRepository(Product),
  ) {}

  getProductColumns() {
    return dataSource
      .getMetadata(Product)
      .ownColumns.map((column) => column.propertyName)
      .filter((column) => column !== 'createdAt' && column != 'updatedAt')
  }

  getProducts() {
    return this.productRepository.find({
      select: ['id', 'name', 'description', 'basePrice', 'image'],
      order: {
        id: 'DESC',
      },
    })
  }

  getProductById(id: number) {
    return this.productRepository.findOne({ where: { id } })
  }

  createOrUpdateProduct(product: Partial<Product>) {
    return this.productRepository.save(product)
  }

  async deleteProduct(id: number) {
    // Deleting the file could probably be done within Typeorm Subscribers
    // https://orkhan.gitbook.io/typeorm/docs/listeners-and-subscribers
    // But to keep the project simple, this is good enough for now
    const productFromDb = await this.getProductById(id)

    await this.productRepository.delete({ id })

    await unlink(`public/${productFromDb?.image}`)
  }
}
