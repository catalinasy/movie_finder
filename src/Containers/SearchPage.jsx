import React from 'react';
import Searchbar from '../Components/Searchbar';
import Results from '../Components/Results';

const SearchPage = () => {
    const results = [{id: 1, name: 'nombree'}, {id: 2, name: 'otra peli'}];

    console.log(process.env.REACT_APP_API_KEY, 'aca esta??')

    //https://api.themoviedb.org/3/movie/550?api_key=8041adf27e988990a42d4a523a5f3e5f


  return (
    <>
      <p className="text-5xl mb-12">Awesome Movie Finder</p>
      <Searchbar />
      <Results results={results} />
    </>
  );
};

export default SearchPage;
