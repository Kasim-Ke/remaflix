import axios from "axios";
import { useEffect, useState } from "react";

import { Movie } from "./Movie";

export const Row = ({ title, feURL }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios.get(feURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [feURL]);

  return (
    <>
      <h2 className="text-white font-bold ms:text-xl p-4">{title}</h2>
      <div className="relative flex items-center ">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
