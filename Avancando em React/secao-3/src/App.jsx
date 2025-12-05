import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./components/Component";
import Component2 from "./components/Component2";
import ListRender from "./components/ListRender";
import TesteFuncoes from "./components/TesteFuncoes";
import Props from "./components/Props";
import Fragmento from "./components/Fragmento";
import FunctionProp from "./components/FunctionProp";
import UserDetails from "./components/UserDetails";

// function showMessage() {
//   console.log("Olha eu aqui!!");
// }

function App() {
  const pessoas = [
    {
      id: 1,
      nome: "Gustavo",
      idade: 14,
      profissao: "Programador",
    },

    {
      id: 2,
      nome: "Maria",
      idade: 25,
      profissao: "Designer",
    },

    {
      id: 3,
      nome: "João",
      idade: 30,
      profissao: "Engenheiro",
    },
  ];

  // const [count, setCount] = useState(0);

  // const cars = [
  //   { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
  //   { id: 2, brand: "Ferrari", color: "Marrom", newCar: true, km: 0 },
  //   { id: 3, brand: "Ferrari", color: "Vermelho", newCar: false, km: 0 },
  // ];

  // return (
  //   <div>
  //     {cars.map((carro) => (
  //       <Props
  //         key={carro.id}
  //         brand={carro.brand}
  //         color={carro.color}
  //         newCar={carro.newCar}
  //       ></Props>
  //     ))}

  //     <FunctionProp funcao={showMessage}></FunctionProp>

  //     {/* State lifting */}
  //     <Component contador={count}></Component>
  //     <Component2 setContador={()=>{setCount((count)=> count+1)}}></Component2>
  //   </div>
  // );

  return (
    <div>
      {pessoas.map((p) => {
        return <UserDetails key={p.id} pessoa={p}></UserDetails>;
      })}
    </div>
  );
}

export default App;
