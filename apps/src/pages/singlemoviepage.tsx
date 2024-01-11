import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie, addRating, deleteMovieApi } from "../services/api";
import MyComponent from "../components/rating";

const Onemovie = () => {
  const [moviedata, setMoviedata] = useState({
    movie_id: "",
    movie_name: "",
    image: "",
    movie_desc: "",
    addedBy: "",
    release_year: 0,
    overallRating: 0,
    ratings: [{ rating: 0, ratedBy: "" }],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieFromAPI(id);
  }, [id]);

  async function getMovieFromAPI(id: any) {
    try {
      const response = await getMovie(id || "");
      setMoviedata(response.data);
      setErrorMessage("");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while fetching movie data.");
      }
    }
  }

  function sendRating(rate: number) {
    addRatingFromAPI(id, rate);
  }

  async function addRatingFromAPI(id: string | undefined, rate: number) {
    try {
      const payload = {
        rating: rate,
      };
      const response = await addRating(id || "", payload);
      console.log(response.data);
      setErrorMessage("");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while adding the rating.");
      }
    }
  }

  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= roundedRating ? "filled" : "empty";
      stars.push(
        <span key={i} className={`star ${starClassName}`}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  const handleDelete = () => {
    console.log("delete");
    deleteMovie(id);
  };

  const deleteMovie = async (id: string | undefined) => {
    try {
      if (id) {
        await deleteMovieApi(id);
        navigate("/");
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
      setErrorMessage(
        error.response.data.message || error.message.data.message[0]
      );
    }
  };

  return (
    <>
      <div className="big-card">
        <div className="flex">
          <div className="image">
            <img  src={`http://localhost:5001/uploads/${moviedata.image}`} alt={moviedata.movie_name} />
          </div>
          <div className="content">
            <div className="left">
              <h3>{moviedata.movie_name}</h3>
              <p>Year: {moviedata.release_year}</p>
              <p>Rating: {renderStars(moviedata.overallRating)}</p>
              <p>Addedby: {moviedata.addedBy}</p>
            </div>
            <div className="right">
              <h4>Ratings</h4>
              {moviedata?.ratings.map((r, i) => (
                <div className="ratings" key={i}>
                  <p>
                    Rating: {renderStars(r.rating)}
                    <br />
                    Rated By: {r.ratedBy}
                  </p>
                </div>
              ))}
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
        <div className="rating">
          <MyComponent sendRating={sendRating} />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Onemovie;
