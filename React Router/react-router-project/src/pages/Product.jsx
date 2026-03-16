import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";



const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/produtos/" + id;

  const {data: product} = useFetch(url);

  console.log(product);

  return (

    <div>
      oi
    </div>

  );
};

export default Product;
