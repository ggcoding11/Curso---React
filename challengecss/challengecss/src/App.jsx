import React from "react";
import Detalhes from "./components/Detalhes"

const App = () => {
  const cars = [
    { id:1, nome: "Gol", marca: "Volkswagen", km: 10000 },
    { id:2, nome: "Uno", marca: "Fiat", km: 5000 },
    { id:3, nome: "Mobi", marca: "Fiat", km: 2000 },
  ];

  return (
    <div className="container">
      <h1>Desafio CSS</h1>

      {cars.map((carro) => (
        <Detalhes nome={carro.nome} marca={carro.marca} km={carro.km} key={carro.id}></Detalhes>
      ))}
    </div>
  );
};

export default App;
