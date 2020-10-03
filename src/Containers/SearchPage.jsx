import React, { useEffect, useState } from "react";
import Searchbar from "../Components/Searchbar";
import Results from "../Components/Results";
import { endpoints } from "../enpoints";

const SearchPage = () => {
  const [movieList, setMovieList] = useState(null);
  const [queryString, setQueryString] = useState(null);
  const [genres, setGenres] = useState(null);
  const [moviesRawData, setMoviesRawData] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    const getGenres = async () => {
      try {
        const res = await fetch(endpoints.genres(apiKey));
        const data = await res.json();
        console.log(data, "la data");
        setGenres(data.genres);
      } catch (err) {
        alert("There has been an error :(");
      }
    };

    getGenres();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const url =
        queryString && queryString !== ""
          ? endpoints.search(apiKey, queryString)
          : endpoints.latestMovies(apiKey);

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMoviesRawData(data.results);
      } catch (err) {
        alert("There has been an error :(");
      }
    };

    getMovies();
  }, [queryString]);

  const getMoviesByGenre = (id) => moviesRawData?.filter(movie => movie.genre_ids.includes(id))
    
  useEffect(() => {
    if(!moviesRawData || !genres) return;
    const genreObj = genres?.reduce((acc, genre) => {
      acc[genre.name] = acc[genre.name] === undefined && getMoviesByGenre(genre.id);
      return acc;
    }, {});
    setMovieList(genreObj);
  }, [genres, moviesRawData]);

  return (
    <>
      <p className="text-5xl mb-8">Awesome Movie Finder</p>
      <Searchbar queryString={queryString} setQueryString={setQueryString} />
      {movieList ? <Results results={movieList} /> : <div>loading...</div>}
    </>
  );
};

export default SearchPage;
