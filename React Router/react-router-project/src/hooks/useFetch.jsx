import React from "react";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [refresh, setRefresh] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        body: JSON.stringify(data),
      });

      setMethod("POST");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((dados) => {
          setData(dados);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, [url, refresh]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setRefresh(json);
      }
    };

    httpRequest();
  }, [config]);

  return { data, httpConfig };
};
