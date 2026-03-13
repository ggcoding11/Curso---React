import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const url = `http://localhost:3000/produtos`;

const Home = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const { data, httpConfig } = useFetch(url);

  const saveProduct = (e) => {
    e.preventDefault();

    const produto = {
      nome,
      preco,
    };

    console.log(produto);

    httpConfig(produto, "POST");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div>
          <label>
            Digite o nome do produto:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Digite o valor do produto:
            <input
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>

      <div>
        {data &&
          data.map((produto) => (
            <ul key={produto.id}>
              <li>{produto.nome}</li>
              <li>{produto.preco}</li>
              <Link to={`/products/${produto.id}`}>Detalhes</Link>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Home;
