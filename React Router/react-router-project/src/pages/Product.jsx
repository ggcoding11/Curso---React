import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/produtos/" + id;

  const { data: product } = useFetch(url);

  return (
    <>
      {product && (
        <div>
          <h3>{product.nome}</h3>

          <ul>
            <li>{product.preco}</li>
            <li>{product.id}</li>
          </ul>
          <Link to={`/products/${product.id}/info`}>
            Mais informações sobre o produto
          </Link>
        </div>
      )}
    </>
  );
};

export default Product;
