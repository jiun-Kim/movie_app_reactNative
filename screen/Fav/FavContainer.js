import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import FavPresenter from "./FavPresenter";

export default () => {
  const [result, setResult] = useState({
    loading: true,
    results: [],
  });

  const getData = async () => {
    const [result, resultError] = await movieApi.discover();
    setResult({
      loading: false,
      results: result,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <FavPresenter {...result} />;
};
