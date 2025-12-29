import React from "react";
import Title from "./components/Title";
import Foto from "../src/assets/react.svg";
import { useState } from "react";

const App = () => {
  let nome = "Gustavo";

  function renderNome() {
    return (
      <div>
        <p>Olá, meu nome é JeeJ</p>
      </div>
    );
  }

  let array = [2, 4, 6, 8];

  function duplicar(n) {
    return n * 2;
  }

  let novoArray = array.map(duplicar);

  console.log(novoArray);

  const [cont, setCont] = useState(0);

  return (
    <div>
      <Title></Title>

      <p>Olá, {nome}</p>

      {renderNome()}

      <ul>
        {novoArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <img src="/vite.svg" alt="" />

      <button
        onClick={() => {
          setCont(cont + 1);
        }}
      >
        Clique em mim
      </button>

      <p>Valor atual = {cont}</p>
    </div>
  );
};

export default App;
