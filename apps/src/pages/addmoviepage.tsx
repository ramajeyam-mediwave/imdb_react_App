import { useState } from "react";
import { IMovie } from "../type";
import Layout from "../components/layout";
import { addMovie } from "../services/api";

const MovieForm = () => {
  const [moviedata, setMoviedata] = useState<IMovie>({
    movie_name: "",
    image: "",
    movie_desc: "",
    release_year: 0,
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMoviedata({ ...moviedata, [name]: value });
  }
  function handletextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setMoviedata({ ...moviedata, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddMovie(moviedata);
  }
  async function handleAddMovie(movie: IMovie) {
    try {
      const MoviePayload = {
        movie_name: movie.movie_name,
        release_year: movie.release_year,
        movie_desc: movie.movie_desc,
        image: movie.image,
        
      };
      const response = await addMovie(MoviePayload);
      console.log(response);
      
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error deleting movie:", error);
      }
    }
  }
  return (
    <>
      <Layout title="Add movie">
        <h1>Movie</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="movie_name">MovieName</label>

          <input
            type="text"
            id="movie_name"
            name="movie_name"
            placeholder="movieName"
            value={moviedata.movie_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="release_year">year</label>

          <input
            type="number"
            id="release_year"
            name="release_year"
            placeholder="year"
            value={moviedata.release_year}
            onChange={handleChange}
          />
          <label htmlFor="movie_desc">Movie_desc</label>

          <textarea
            id="movie_desc"
            name="movie_desc"
            placeholder="Movie_desc"
            value={moviedata.movie_desc}
            onChange={handletextArea}
            required
          />

          <label htmlFor="url">ImageUrl</label>

          <input
            type="text"
            id="url"
            name="image"
            placeholder="ImageUrl"
            value={moviedata.image}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </Layout>
    </>
  );
};
export default MovieForm;
