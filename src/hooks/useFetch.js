/* eslint-disable no-throw-literal */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusTex: !res.statusText ? "Ocurrió un Error" : res.statusText,
          };
        }
        let Data = await res.json();
        setisPending(false);
        setData(Data.results);
        //console.log(Data);
        setError({ err: false });
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };
    getData(url);
  }, [url]);
  return { data, isPending, error };
};
