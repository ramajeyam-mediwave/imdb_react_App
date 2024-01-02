import MovieCard from "../components/movieCard";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import { IMovie } from "../type";
import PaginationComponent from "../components/pagination";

const MovieList = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  

  useEffect(() => {
    getMoviesFromAPI();
  }, [search, selectedOption, page]);
  async function getMoviesFromAPI() {
    try {
      const response = await getMovies(page, search, selectedOption);
      setMovies(response.data.movies);
      setCount(response.data.totalMovies - 4);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  function sendPage(currentpage: number) {
    setPage(currentpage);
    
  }
  return (
    <Layout title="MyIMDb">
      <div className="searchbar">
        <input
          className="nav-inp"
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter"
          name="filter"
          id="filter"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option selected disabled>
            filter
          </option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
        </select>
      </div>
      <div className="gridBox">
        {movies.map((m) => (
          <div className="movie-card-div" key={m.movie_id}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
      <div>
        <PaginationComponent count={count} sendPage={sendPage} />
      </div>
    </Layout>
  );
};
export default MovieList;
