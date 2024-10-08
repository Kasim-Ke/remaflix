import axios from "axios";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Movie } from "./Movie";

export const Row = ({ title, feURL, rowID }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios.get(feURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [feURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold ms:text-xl md:p-4 ">{title}</h2>

      <div className="relative flex items-center group ">
        <div className="md:block hidden">
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 md:hidden group-hover:block  "
          />
        </div>

        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <div className="md:block hidden">
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          />
        </div>
      </div>
    </>
  );
};
