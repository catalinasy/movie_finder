import React from 'react';
import Searchbar from '../Components/Searchbar';
import Results from '../Components/Results';

const SearchPage = () => {
    const results = [{id: 1, name: 'nombree'}, {id: 2, name: 'otra peli'}];


  return (
    <>
      <p className="text-5xl mb-12">Awesome Movie Finder</p>
      <Searchbar />
      <Results results={results} />
    </>
  );
};

export default SearchPage;
