import React from "react";
import { useState } from "react";
import "../components/MyForm.css";

const MyForm = ({ nomeProp, emailProp, idadeProp, bioProp, roleProp }) => {
  const [nome, setNome] = useState(nomeProp ? nomeProp : "");
  const [email, setEmail] = useState(emailProp ? emailProp : "");
  const [idade, setIdade] = useState(idadeProp ? idadeProp : "");
  const [bio, setBio] = useState(bioProp ? bioProp : "");
  const [role, setRole] = useState(roleProp ? roleProp : "");

  const mudarNome = (e) => {
    setNome(e.target.value);
  };

  console.log(role);

  return (
    <div className="container-form">
      <h1>Formulário de teste</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNome("");
          setEmail("");
          setIdade("");
          setBio("");
          setRole("");
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

        <div>
          <label htmlFor="bioUser">Bio:</label>
          <textarea
            name=""
            id="bioUser"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          ></textarea>
        </div>

        <div>
          <label htmlFor="role">Função no sistema:</label>
          <select
            name=""
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        <button type="submit">Enviar formulário</button>
      </form>
    </div>
  );
};

export default MyForm;
