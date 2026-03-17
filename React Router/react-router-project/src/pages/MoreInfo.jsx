import React from "react";
import { Link, useParams } from "react-router-dom";

const MoreInfo = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Mais informações sobre o produto {id}</h1>

      <Link to={`/products/${id}/info/precos`}>Ver os preços</Link>
    </div>
  );
};

export default MoreInfo;
