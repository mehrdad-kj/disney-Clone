import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({
  genreId,
  index_,
}: {
  genreId: number;
  index_: number;
}) => {
  const [movies, setMovies] = useState<any[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  const getMovieListById = () => {
    GlobalApi.getMovieByGenereId(genreId).then((res) => {
      console.log("res", res.data.results);
      setMovies(res.data.results);
    });
  };

  useEffect(() => {
    getMovieListById();
  }, []);

  const slideRight = (element: React.RefObject<HTMLDivElement>) => {
    if (element && element.current) element.current.scrollLeft += 500;
  };
  const slideLeft = (element: React.RefObject<HTMLDivElement>) => {
    if (element && element.current) element.current.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute  hover:rounded-full 
          hover:bg-gray-400
              ${index_ % 3 === 0 ? "top-16" : "top-1/2 -translate-y-1/2"} `}
      />
      <div
        className="flex gap-8 overflow-x-auto no-scrollbar px-3 pb-5 pt-3"
        ref={elementRef}
      >
        {movies.map((item) => (
          <>
            {index_ % 3 === 0 ? (
              <HrMovieCard item={item} />
            ) : (
              <MovieCard item={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 
            absolute right-0  hover:rounded-full hover:bg-gray-400
             ${index_ % 3 === 0 ? "top-16" : "top-1/2 -translate-y-1/2"}`}
      />
    </div>
  );
};

export default MovieList;
