import genere from "../Constants/GenersList";
import MovieList from "./MovieList";

const GenersMovieList = () => {
  return (
    <div className="p-8 px-8 md:px-16">
      {genere.map((item, index) => (
        <>
          <h2 className="text-sm text-white font-bold pl-3">{item.name}</h2>
          <MovieList genreId={item.id} index_={index}/>
        </>
      ))}
    </div>
  );
};

export default GenersMovieList;
