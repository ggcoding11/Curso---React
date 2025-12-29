import React from "react";
import { useState } from "react";
import "../components/MyForm.css";

const MyForm = () => {
  const [nome, setNome] = useState("");

  const mudarNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <div className="container-form">
      <h1>Formulário de teste</h1>

      <form action="" className="formulario">
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            name=""
            id="nome"
            placeholder="Digite o seu nome"
            onChange={mudarNome}
          />
        </div>

        <div>
          <label htmlFor="nome2">Nome: </label>
          <input
            type="text"
            name=""
            id="nome2"
            placeholder="Digite o seu nome"
            onChange={mudarNome}
            value={nome}
          />
        </div>

        <div>
          <label htmlFor="idade">Idade: </label>
          <input
            type="number"
            name=""
            id="idade"
            min={0}
            max={100}
            placeholder="Digite sua idade"
          />
        </div>
      </form>
    </div>
  );
};

export default MyForm;
