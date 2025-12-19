import React from "react";
import type { Product } from "../mocks/products";

type ProductCardProps = {
  product: Product;
  onClick: (product: Product) => void;
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button className="card" type="button" onClick={() => onClick(product)}>
      <img className="card__image" src={product.image} alt={product.title} />
      <div className="card__body">
        <h2 className="card__title">{product.title}</h2>
        <p className="card__price">{product.price.toLocaleString("ru-RU")} ₽</p>
      </div>
    </button>
  );
}
