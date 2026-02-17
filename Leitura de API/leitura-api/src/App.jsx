import React from "react";
import { useState, useEffect } from "react";

const url = `http://localhost:3000/products`;

const App = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = fetch(url);

    promise
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const addProduto = (e) => {
    e.preventDefault();

    const product = { name, price };

    setLoading(true);

    const promise = fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
    });

    promise
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
        setLoading(false);
      })
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

        {loading === true ? (
          <button disabled>Aguarde...</button>
        ) : (
          <button type="submit">Adicionar produto</button>
        )}
      </form>

      {loading === true ? (
        <p>Carregando...</p>
      ) : (
        products.map((product) => (
          <ul key={product.id}>
            <li>Nome: {product.name}</li>
            <li>Preço: {product.price}</li>
          </ul>
        ))
      )}
    </div>
  );
};

export default App;
