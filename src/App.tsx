import "./App.css";
import GenersMovieList from "./components/GenersMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenersMovieList />
    </>
  );
}

export default App;
