import React from "react";
import { useEffect, useState } from "react";

export const useFetch = (url, method, object) => {
  const [resultado, setResultado] = useState(null);

  let options = {
    method: method,
  };

  if (method === "POST") {
    options.body = JSON.stringify(object);
  }

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((dados) => {
        setResultado(dados);
      })
      .catch((error) => console.log(error));
  }, []);

  return resultado;
};
