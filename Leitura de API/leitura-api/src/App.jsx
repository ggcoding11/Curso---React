import React from "react";
import { useState, useEffect } from "react";

const url = `http://localhost:3000/products`;

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function readAPI() {
      const promise = await fetch(url);

      const json = await promise.json();

      setProducts(json);
    }

    readAPI();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Lista de produtos</h1>
    </div>
  );
};

export default App;
