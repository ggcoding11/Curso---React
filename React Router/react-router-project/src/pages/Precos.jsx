import React from "react";
import { useParams } from "react-router-dom";

const Precos = () => {
  const { id } = useParams();

  return <h1>Precos do produto {id}</h1>;
};

export default Precos;
