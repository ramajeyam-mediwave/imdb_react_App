import { useState } from "react";
import { IMovie } from "../type";
import Layout from "../components/layout";
import { addMovie } from "../services/api";
import Modal from "../components/Modal";

const MovieForm = () => {
  const [moviedata, setMoviedata] = useState<IMovie>({
    movie_name: "",
    image: "",
    movie_desc: "",
    release_year: 0,
  });

  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
        image: movie.image,
        movie_desc: movie.movie_desc,
        release_year: movie.release_year,
      };
      console.log(MoviePayload);
      const response = await addMovie(MoviePayload);
      console.log(response.data.gen_token);
      localStorage.setItem("token", response.data.gen_token);
      setError("");
      setIsModalOpen(true);
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data.message);
      setIsModalOpen(true);
    }
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <Layout title="movieForm">
        <h1>MovieForm</h1>
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
          {/* <h3 >{error}</h3> */}
          <button type="submit">Submit</button>
        </form>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} error={error} />
      </Layout>
    </>
  );
};
export default MovieForm;
