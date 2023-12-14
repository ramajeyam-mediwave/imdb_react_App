import MovieCard from "../components/movieCard";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import { IMovie } from "../type";

const MovieList = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function getMoviesFromAPI() {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
    getMoviesFromAPI();
    [];
  });
  return (
    <Layout title="Movie_list">
      <div className="gridBox">
        {movies.map((m, i) => (
          <div className="movie-card" key={i}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default MovieList;
