import React, { useEffect, useState } from "react";
import Searchbar from "../Components/Searchbar";
import Results from "../Components/Results";
import { endpoints } from "../enpoints";

const SearchPage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(
          endpoints.latestMovies(process.env.REACT_APP_API_KEY)
        );
        const data = await res.json();
        setMovieList(data.results);
      } catch (err) {
        alert("There has been an error :(");
      }
    };
    getMovies();
  }, []);

  //

  return (
    <>
      <p className="text-5xl mb-12">Awesome Movie Finder</p>
      <Searchbar />
      <Results results={movieList} />
    </>
  );
};

export default SearchPage;
