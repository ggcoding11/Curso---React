import { useState } from "react";

const TesteFuncoes = () => {
  // const [list, mudarList] = useState([1, 2, 3, 4, 5, 6]);

  const list = [
    {
      id: 1,
      nome: "Gustavo",
    },

    {
      id: 2,
      nome: "Ana",
    },

    {
      id: 3,
      nome: "Júlia",
    },

    {
      id: 4,
      nome: "Carlos",
    },
  ];

  console.log(list.filter((item) => {
    return item.nome[0] === "C";
  }))

  return (
    <div>
      
    </div>
  );
};

export default TesteFuncoes;
