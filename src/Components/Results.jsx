import React from "react";
import {useHistory} from 'react-router-dom';

const Results = ({ results }) => {
const history = useHistory();

const handleClick = (id) => {
    history.push(`/movie/${id}`);

}


  return (
    <div className="flex full-width w-3/4 m-12">
      {results.map((r) => (
        <div class="py-4 m-4 cursor-pointer" onClick={() => handleClick(r.id)}>
          <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
            <div className="mt-4">
              <div class="w-full image-cover rounded-t-md flex justify-center">
                <img src={"https://via.placeholder.com/200x150"}/>
              </div>
              <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                <span class="block text-lg text-gray-800 font-bold tracking-wide">
                  {r.name}
                </span>
                <span class="block text-gray-600 text-sm">
                  Aca ponemos la info de la peli
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
