import { IMovie } from "../type";
import { Link } from "react-router-dom";

interface IMovieCard {
  movie: IMovie;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  return (
    <>
      <img src={movie.image} alt={movie.movie_name} />
      <h3>{movie.movie_name}</h3>
      <p>Year: {movie.release_year}</p>
      <p>Rating:{movie.rating}</p>
      <Link to="/onemovie"><button className="button">click </button></Link>      
    </>
  );
};

export default MovieCard;
