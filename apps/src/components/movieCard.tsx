import { IMovie } from "../type";


interface IMovieCard {
  movie: IMovie;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  return (
    
    <>
      <img src={movie.image} alt={movie.movie_name} />
      <h3>{movie.movie_name}</h3>
      <p>Year: {movie.release_year}</p>
    </>
  );
};

export default MovieCard;
