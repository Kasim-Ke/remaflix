import axios from "axios";
import req from "../Requests.js";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie =
    movies.length > 0
      ? movies[Math.floor(Math.random() * movies.length)]
      : null;

  useEffect(() => {
    axios
      .get(req.requestPopular)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);

  const cutString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

  return (
    <div className="relative md:max-w-[1440px] max-w-[380px] h-[850px] text-white mx-auto">
      <div className="w-full h-full px-2">
        {movie ? (
          <img
            className="w-full h-full object-cover px-2"
            src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
        ) : (
          <p className="h-[300px] flex justify-center items-center">
            Loading...
          </p>
        )}
        <div className="w-full h-full absolute top-0 left-4  bg-gradient-to-r  from-black/80"></div>
      </div>

      <div className="absolute w-full top-[60%] left-[5%] px-3">
        {movie && (
          <div>
            <div className="md:text-4xl text-3xl pb-2 font-bold">
              {movie.title}
            </div>
            <button className="py-2 px-5 text-black bg-white border mr-4 hover:opacity-65 duration-200">
              Play
            </button>
            <button className="py-2 px-5 border hover:opacity-65 duration-200">
              Watch Later
            </button>
            <div className="pt-2 text-gray-400">
              <p>Released: {movie.release_date}</p>
              <p className="md:w-[500px] w-[300px] pt-2 text-white">
                {cutString(movie?.overview, 140)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
