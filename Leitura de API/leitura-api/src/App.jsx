import React from "react";
import { useState, useEffect } from "react";

const url = `http://localhost:3000/products`;

const App = () => {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    // async function readAPI() {
    //   const promise = await fetch(url);

    //   const json = await promise.json();

    //   setProducts(json);
    // }

    // readAPI();

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  const addProduto = async (e) => {
    e.preventDefault();

    const product = { name, price };
    const promise = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
    });
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

      {products.map((item) => (
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
