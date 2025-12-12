import React from "react";
import { useState } from "react";
import "../components/MyForm.css";

const MyForm = () => {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  console.log(nome)

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
            onChange={handleNome}
          />
        </div>

        <div>
          <label htmlFor="idade">Idade: </label>
          <input type="number" name="" id="idade" min={0} max={100} />
        </div>
      </form>
    </div>
  );
};

export default MyForm;
