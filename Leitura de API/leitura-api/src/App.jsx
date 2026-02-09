import React from "react";
import { useState, useEffect, useRef } from "react";
import { useFetch } from "./hooks/useFetch";

const url = `http://localhost:3000/products`;

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const actualID = useRef(null);

  const items = useFetch(url);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       data.forEach((product, index) => {
  //         if (product.id > actualID.current || index === 0) {
  //           actualID.current = product.id;
  //         }
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const addProduto = (e) => {
    e.preventDefault();

    const product = { id: Number(actualID.current) + 1, name, price };
    const promise = fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
    });

    promise
      .then((response) => response.json())
      .then((data) => setProducts((products) => [...products, data]))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Lista de produtos</h1>

      <form onSubmit={addProduto}>
        <label>
          Nome do produto
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Preço do produto
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <button type="submit">Adicionar produto</button>
      </form>

      {items != null &&
        items.map((item) => (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
          </ul>
        ))}
    </div>
  );
};

export default App;
