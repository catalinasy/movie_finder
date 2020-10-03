import React from "react";
import { useHistory } from "react-router-dom";

const Results = ({ results }) => {
  const history = useHistory();
  const genres = Object.keys(results);

  const handleClick = (id) => {
    history.push(`/movie/${id}`);
  }

  return (
    <div className="flex flex-col flex-wrap justify-center full-width w-full m-12">
      {genres.map((genre) => 
        results[genre].length &&
        <>
        <span className="border font-bold py-2 px-4 rounded w-40 mx-24">
        {genre}
      </span>
        <div className="flex flex-wrap full-width w-full m-12">
          
          {results[genre].map((r) => (
            <div
              className="py-4 m-4 cursor-pointer"
              onClick={() => handleClick(r.id)}
            >
              <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                <div className="mt-4">
                  <div class="w-full image-cover rounded-t-md flex justify-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${r.poster_path}`}
                    />
                  </div>
                  <div class="py-8 px-4 bg-white rounded-b-md fd-cl group-hover:opacity-25">
                    <span class="block text-lg text-gray-800 font-bold tracking-wide">
                      {r.original_title}
                    </span>
                    <span class="block text-gray-600 text-sm h-48 overflow-hidden">
                      {r.overview}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default Results;
