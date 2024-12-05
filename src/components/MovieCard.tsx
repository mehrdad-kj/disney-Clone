const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ item }: { item: any }) => {
  return (
    <>
      <img src={IMAGE_BASE_URL + item.poster_path} className="w-[110px] md:w-[200px] rounded hover:border-2 border-gray-400 hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer"/>
    </>
  );
};

export default MovieCard;
