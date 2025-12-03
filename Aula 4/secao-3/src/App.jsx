import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./components/Component";
import Component2 from "./components/Component2";
import ListRender from "./components/ListRender";
import TesteFuncoes from "./components/TesteFuncoes";
import Props from "./components/Props"

function App() {
  const [count, setCount] = useState(0);

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Ferrari", color: "Marrom", newCar: true, km: 0},
    {id: 3, brand: "Ferrari", color: "Vermelho", newCar: false, km: 0},   
  ]

  return (
    <div>
      {cars.map((carro) => (
        <Props ></Props>
      ))}

    </div>
  );
}

export default App;
