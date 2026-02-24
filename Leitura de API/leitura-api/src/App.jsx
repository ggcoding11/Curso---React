import React from "react";
import { useState, useRef, useEffect } from "react";

const url = `http://localhost:3000/products`;

const App = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [idDelete, setIdDelete] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const idAtual = useRef();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.map((product) => product.id));

        idAtual.current = String(
          Number(
            data
              .map((product) => product.id)
              .reduce((acum, atual) => atual > acum && atual, 0),
          ) + 1,
        );

        setProducts(data);
        setLoading(false);
      })
      .catch((erro) => {
        setError(erro.message);
        setLoading(false);
      });
  }, []);

  const deleteProduto = (e) => {
    e.preventDefault();

    const resultado = products.find(
      (produto) => produto.id === String(idDelete),
    );

    if (resultado) {
      fetch(url + "/" + idDelete, {
        method: "DELETE",
      }).then((response) => {
        if (response.status === 200) {
          setProducts(products.filter((produto) => produto.id != idDelete));
        }
      });
    } else {
      alert("Produto não encontrado!");
    }

    setIdDelete("");
  };

  const addProduto = (e) => {
    e.preventDefault();

    const product = { id: idAtual.current, name, price };

    setLoading(true);

    const promise = fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
    });

    promise
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
        idAtual.current = String(Number(idAtual.current) + 1);
        setName("");
        setPrice("");
        setLoading(false);
      })
      .catch((erro) => {
        setError(erro);
        setLoading(false);
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

        {loading === true ? (
          <button disabled>Aguarde...</button>
        ) : (
          <button type="submit">Adicionar produto</button>
        )}
      </form>

      <form style={{ marginTop: "20px" }} onSubmit={deleteProduto}>
        <label>
          ID do produto a ser deletado:
          <input
            type="number"
            value={idDelete}
            onChange={(e) => setIdDelete(e.target.value)}
          />
        </label>

        <button type="submit">Deletar</button>
      </form>

      {error != null && <p>Erro ao carregar os dados</p>}
      {loading === true ? (
        <p>Carregando...</p>
      ) : (
        products.map((product) => (
          <ul key={product.id}>
            <li>ID: {product.id}</li>
            <li>Nome: {product.name}</li>
            <li>Preço: {product.price}</li>
          </ul>
        ))
      )}
    </div>
  );
};

export default App;
