const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ item }: { item: any }) => {
  return (
    <div className="hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
      <img
        src={IMAGE_BASE_URL + item.backdrop_path}
        className="w-[110px] md:w-[260px] rounded hover:border-2 border-gray-400 hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">{item.title}</h2>
    </div>
  );
};

export default HrMovieCard;
