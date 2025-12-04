import { useState } from "react";

const TesteFuncoes = () => {
  // const [list, mudarList] = useState([1, 2, 3, 4, 5, 6]);

  const [list, setList] = useState([
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
  ]);

  const apertou = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    console.log(randomNumber);

    setList(list.filter((item) => item.id !== randomNumber));
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.id} - {item.nome}
          </li>
        ))}
      </ul>

      <button onClick={apertou}>Clicar</button>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jfKfPfyJRdk?si=QFYrdtBGIcMCFxHF"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default TesteFuncoes;
