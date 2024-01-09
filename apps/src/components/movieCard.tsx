import { IMovie } from "../type";
import { Link } from "react-router-dom";

interface IMovieCard {
  movie: IMovie;
}




const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  return (
    <>
      <img className="" src={movie.image} alt={movie.movie_name} />
      <h3>{movie.movie_name}</h3>
      <p>Year: {movie.release_year}</p>
      <p>Rating:{movie.rating}</p>
      <Link to={`/movies/${movie.movie_id}`}>
        <button className="button">View </button>
      </Link>
    </>
  );
};

export default MovieCard;
