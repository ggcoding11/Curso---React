import React from "react";
import { useState } from "react";
import "../components/MyForm.css";

const MyForm = (props) => {
  const [nome, setNome] = useState(props.nomeProp ? props.nomeProp : "");
  const [email, setEmail] = useState(props.emailProp ? props.emailProp : "");
  const [idade, setIdade] = useState(props.idadeProp ? props.idadeProp : "");

  const mudarNome = (e) => {
    setNome(e.target.value);
  };

  console.log(email);

  return (
    <div className="container-form">
      <h1>Formulário de teste</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="formulario"
      >
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            name=""
            id="nome"
            placeholder="Digite o seu nome"
            onChange={mudarNome}
            value={nome}
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
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name=""
            id="email"
            placeholder="Digite o seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
            value={idade}
            onChange={(e) => {
              setIdade(e.target.value);
            }}
          />
        </div>

        <button type="submit">Enviar formulário</button>
      </form>
    </div>
  );
};

export default MyForm;
