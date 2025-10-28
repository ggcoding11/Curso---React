import Foto from "../assets/foto1.jpg";
import { useState } from "react";
function Component() {
  const [nome, mudarNome] = useState("Gustavo");

  let numbers = [64, 49, 4, 16];

  let novoArray = numbers.map(dobrar);

  console.log(novoArray);

  function dobrar(n){
    return n*2
  }

  return (
    <div>
      <img src={Foto} alt="Paisagem" />

      <p>Valor: {nome}</p>

      <button
        onClick={() => {
          mudarNome("Mudou o nome");
        }}
      >
        Aumentar
      </button>
    </div>
  );
}

export default Component;
