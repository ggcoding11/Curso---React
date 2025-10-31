import { useState } from "react";

const ListRender = () => {
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
  return (
    <div>
      {/* <ul>{list.map((item) => {
        return <li> {item} </li>
      })}</ul> */}

      <ul>
        {list.map((item) => (
          <li key={item.id}> {item.nome} </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
