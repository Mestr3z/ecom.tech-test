import { mockProducts, type Product } from "../mocks/products";

export function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 300);
  });
}
