import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const promise = fetch(url);

    promise
      .then((response) => response.json())
      .then((dados) => {
        setData(dados);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return data;
};
