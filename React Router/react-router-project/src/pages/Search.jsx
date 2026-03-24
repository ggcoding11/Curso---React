import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams);

  const url = "http://localhost:3000/produtos?" + searchParams;

  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis</h1>

      {items &&
        items.map((produto) => (
          <ul key={produto.id}>
            <li>{produto.nome}</li>
            <li>{produto.preco}</li>
            <Link to={`/products/${produto.id}`}>Detalhes</Link>
          </ul>
        ))}
    </div>
  );
};

export default Search;
