import { useEffect, useState } from "react"
import { ProductRepositoryImpl } from "../data/productRepositoryImpl"
import { ProductRepository } from "../domain/productRepositor"
import { Product } from "../domain/product"


const repository: ProductRepository = new ProductRepositoryImpl()

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getProducts = async() => {
    setLoading(true)
    try {
      const response = await repository.getProducts()
      setProducts(response)
    } catch {
      setError("Error al obtener los productos")
    }
  }

  const createProduct = async(product: Product) => {
    try {
      await repository.createProduct(product)
      setProducts((prev) => [...prev, product])
    } catch {
      setError("Error al crear el producto")
    }
  }

  const updateProduct = async(product: Product) => {
    try {
      await repository.updateProduct(product)
      setProducts((prev) => prev.map(
        current => current.id == product.id ? product : current
      ))
    } catch {
      setError("Error al actualizar el producto")
    }
  }

  const deleteProduct = async(productId: string) => {
    try {
      await repository.deleteProduct(productId)
      setProducts((prev) => prev.filter(
        current => current.id != productId
      ))
    } catch {
      setError("Error al eliminar el producto")
    }
  }
  
  const saveProduct = (product: Product) => {
    if (currentProduct) {
      updateProduct(product)
      setCurrentProduct(null)
      return
    }

    createProduct(product)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return {
    products,
    currentProduct,
    setCurrentProduct,
    saveProduct,
    deleteProduct
  }
}