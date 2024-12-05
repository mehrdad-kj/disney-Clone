import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  const goToRight = (element: React.RefObject<HTMLDivElement>) => {
    if (element && element.current && screenWidth) {
      element.current.scrollLeft += screenWidth - 110;
    }
  };

  const goToLeft = (element: React.RefObject<HTMLDivElement>) => {
    if (element && element.current && screenWidth) {
      element.current.scrollLeft -= screenWidth - 110;
    }
  };



  const getTrendMovies = () => {
    GlobalApi.getTrendingMovies.then((res) => {
      console.log(res);
      setMovies(res.data.results);
    });
  };

  useEffect(() => {
    getTrendMovies();
  }, []);

  return (
    <div className="relative">
      <HiChevronLeft
        size={30}
        className="hidden md:block absolute left-4 top-[155px] cursor-pointer p-1 hover:bg-gray-400 hover:rounded-full z-20"
        onClick={() => goToLeft(elementRef)}
      />
      <HiChevronRight
        size={30}
        className="hidden md:block absolute right-4 top-[155px] cursor-pointer p-1 hover:bg-gray-400 hover:rounded-full z-20"
        onClick={() => goToRight(elementRef)}
      />
      <div
        className="flex overflow-x-hidden px-16 py-4  scroll-smooth cursor-pointer z-0"
        ref={elementRef}
      >
        {movies.map((movie: any) => (
          <img
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top rounded-md mr-5 hover:border-4 border-gray-400 transition-all duration-100 ease-in-out z-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
