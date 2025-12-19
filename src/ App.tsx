import React from "react";
import { mockProducts } from "./mocks/products";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Товары</h1>
        <input
          className="header__search"
          id="searchInput"
          placeholder="Поиск по названию…"
        />
      </header>

      <main className="grid">
        {mockProducts.map((p) => (
          <button key={p.id} className="card" type="button">
            <img className="card__image" src={p.image} alt={p.title} />
            <div className="card__body">
              <div className="card__title">{p.title}</div>
              <div className="card__price">
                {p.price.toLocaleString("ru-RU")} ₽
              </div>
            </div>
          </button>
        ))}
      </main>
    </div>
  );
}
