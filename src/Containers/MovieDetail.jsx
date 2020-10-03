import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { endpoints } from "../enpoints";

const MovieDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(
          endpoints.movieDetails(id, process.env.REACT_APP_API_KEY)
        );
        const data = await res.json();
        console.log(data, 'data')
        setMovieDetails(data);
      } catch (err) {
        alert("There has been an error :(");
      }
    };
    getMovie();
  }, []);

  return (
    <>
      {movieDetails ? (
        <>
          <a
            className="absolute cursor-pointer hover:text-blue-500 "
            style={{ top: "1rem", left: "1rem" }}
            onClick={() => history.push("/")}
          >
            Back home
          </a>
          <p className="text-5xl mb-8">{movieDetails.original_title}</p>

          <div className="mt-12 flex justify-center h-auto m-12 w-2/3 border rounded p-4">
            <div className="image-cover rounded-t-md flex items-center justify-center h-64 w-1/4" 
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w200${movieDetails.poster_path})`,
              backgroundRepeat: 'no-repeat'}}
              >
             
              </div>
            <p className="mx-4 text-lg w-2/3">{movieDetails.overview}</p>
            </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
export default MovieDetail;
