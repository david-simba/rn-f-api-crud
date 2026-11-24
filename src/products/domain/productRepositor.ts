import { Product } from "./product";

export interface ProductRepository {
  getProducts(): Promise<Product[]>
  createProduct(product: Product): Promise<void> 
  updateProduct(product: Product): Promise<void>
  deleteProduct(productId: string): Promise<void>
}