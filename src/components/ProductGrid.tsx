import React from "react";
import type { Product } from "../mocks/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
};

export default function ProductGrid({
  products,
  onProductClick,
}: ProductGridProps) {
  if (products.length === 0) {
    return <p>Ничего не найдено</p>;
  }

  return (
    <main className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onClick={onProductClick} />
      ))}
    </main>
  );
}
