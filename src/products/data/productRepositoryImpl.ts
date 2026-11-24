import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepositor";

const API_URL = "https://6a77661063e9caf860c38402.mockapi.io/products"

export class ProductRepositoryImpl implements ProductRepository {

  async getProducts(): Promise<Product[]> {
    const response = await fetch(API_URL)
    if(!response.ok) throw new Error("Error getting products")
    return response.json()
  }

  async createProduct(product: Product): Promise<void> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(product)
    })

    if(!response.ok) throw new Error("Error creating product")
  }

  async updateProduct(product: Product): Promise<void> {
    const response = await fetch(`API_URL/${product.id}`, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(product)
    })

    if(!response.ok) throw new Error("Error updating product")
  }

  async deleteProduct(productId: string): Promise<void> {
    const response = await fetch(`API_URL/${productId}`, {
      method: "DELETE",
      headers: {"Content-type": "application/json"}
    })

    if(!response.ok) throw new Error("Error deleting product")
  }
}