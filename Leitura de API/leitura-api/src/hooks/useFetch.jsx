import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const promise = fetch(url);

    promise.then((response) => response.json());
    promise.then((data) => {
      setData(data);
    });
    promise.catch((error) => console.log(error));
  }, [url]);

  return { data };
};
