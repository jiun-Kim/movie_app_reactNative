import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [keyword, setkeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showError: null,
  });
  const onChange = (text) => setkeyword(text);

  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showError,
    });
  };
  return (
    <SearchPresenter
      refreshFn={search}
      {...results}
      keyword={keyword}
      onChange={onChange}
      onSubmit={search}
    />
  );
};
