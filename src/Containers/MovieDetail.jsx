import React from "react";
import { useHistory } from "react-router-dom";

const MovieDetail = () => {
  const history = useHistory();

  return (
    <>
      <a
        className="absolute cursor-pointer hover:text-blue-500 "
        style={{ top: "1rem", left: "1rem" }}
        onClick={() => history.push("/")}
      >
        Back home
      </a>
      <div className="flex flex-col justify-center h-full">
      <p className="text-5xl mb-12">El titulo de la pelicula</p>
        <div class="w-full image-cover rounded-t-md flex justify-center ">
          <img src="https://via.placeholder.com/200x150" />
          <p className="mx-4 text-lg">
              Descripcion de la pelicula
          </p>
        </div>
      </div>
    </>
  );
};
export default MovieDetail;
