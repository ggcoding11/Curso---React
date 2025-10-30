import { useState } from "react";

const ListRender = () => {
  const [list, mudarList] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      {/* <ul>{list.map((item) => {
        return <li> {item} </li>
      })}</ul> */}

      <ul>
        {list.map((item, i) => (
          <li> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
