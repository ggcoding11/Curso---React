import React from "react";
import { useState, useEffect } from "react";

const url = `http://localhost:3000/products`;

const App = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <h1>Lista de produtos</h1>

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
