import React, { useCallback, useRef } from "react";

const Searchbar = ({ queryString, setQueryString }) => {
  const searchInput = useRef("");



  const handleSearch = useCallback(() => {
    setQueryString(searchInput.current.value)
  }, [setQueryString, searchInput])



  return (
    <div className="pt-2 relative mx-auto text-gray-600 flex justify-between items-center">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search for your movies"
        ref={searchInput}
      />
        
      <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
        Search!
      </button>
    </div>
  );
};

export default Searchbar;
