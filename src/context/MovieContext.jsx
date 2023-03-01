import React, { createContext, useEffect, useState } from "react";

const Api = `http://www.omdbapi.com/?i=tt3896198&apikey=3af24ea3`;
const AppContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setError] = useState({ show: "Not got response" });
  const [query, setQuery] = useState("titanic");
  const getMovies = async (url) => {
    console.log(url)
    let res = await fetch(url);

    let data = await res.json();

    if (data.Response) {
      setLoading(false);
      setMovie(data.Search);
    } else {
      setError("not found");
    }
  };
  console.log("d", movie);
  useEffect(() => {
   
   let timeOut = setTimeout(() => {
     getMovies(`${Api}&s=${query}`);
   }, 800);
   return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <AppContext.Provider value={{ movie, isLoading, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { MovieContextProvider, AppContext };
