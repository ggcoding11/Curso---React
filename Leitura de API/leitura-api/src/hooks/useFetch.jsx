import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    const promise = fetch(url);

    promise
      .then((response) => response.json())
      .then((dados) => {
        setData(dados);
      })
      .catch((error) => console.log(error));
  }, [url, callFetch]);

  useEffect(() => {
    if (method === "POST") {
      const promise = fetch(url, config);

      promise
        .then((response) => response.json())
        .then((dados) => {
          setCallFetch(dados);
        })
        .catch((error) => console.log(error));
    }
  }, [config]);

  return [data, httpConfig];
};
