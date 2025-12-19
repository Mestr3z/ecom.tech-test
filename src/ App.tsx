import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api/products";
import type { Product } from "./mocks/products";
import Modal from "./components/Modal";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProducts = normalizedQuery
    ? products.filter((p) => p.title.toLowerCase().includes(normalizedQuery))
    : products;

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Товары</h1>
        <input
          className="header__search"
          id="searchInput"
          placeholder="Поиск по названию…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>

      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <ProductGrid
          products={filteredProducts}
          onProductClick={setSelectedProduct}
        />
      )}

      {selectedProduct && (
        <Modal
          title={selectedProduct.title}
          onClose={() => setSelectedProduct(null)}
        >
          <img
            className="modal__image"
            src={selectedProduct.image}
            alt={selectedProduct.title}
          />
          <p>{selectedProduct.description}</p>
          <p>
            <strong>Категория:</strong> {selectedProduct.category}
          </p>
          <p>
            <strong>Цена:</strong>{" "}
            {selectedProduct.price.toLocaleString("ru-RU")} ₽
          </p>
          <button
            className="modal__buy"
            type="button"
            onClick={() => {
              console.log("успешно");
              setSelectedProduct(null);
            }}
          >
            Купить
          </button>
        </Modal>
      )}
    </div>
  );
}
