import React from "react";
import { useNavigate } from "react-router-dom";

const Teste = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        navigate("/teste");
      }}
    >
      Teste pro useNavigate
    </button>
  );
};

export default Teste;
