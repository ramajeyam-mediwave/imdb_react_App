import axios from "axios";
import { IMovie, IUserAdd, IRating, IResetPass } from "../type";
import { jwtDecode } from "jwt-decode";


const axiosInstancewithheader = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const setHeaders = () => {
  const token = localStorage.getItem("token");
  let headers = {};
  if (token) {
    let decodedToken = jwtDecode(token);
    console.log("Decoded Token", decodedToken);
    let currentDate = new Date();

    if (decodedToken.exp && decodedToken.exp < currentDate.getTime() / 1000) {
      console.log("Token expired.");
      localStorage.clear();
    } else {
      headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      return headers;
    }
  }
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
});

export const updateUser = (payload: IUserAdd) => {
  return axiosInstance.patch("/update", payload, setHeaders());
};

export const addUser = (payload: IUserAdd) => {
  return axiosInstance.post("/signup", payload);
};

export const getToken = (payload: IUserAdd) => {
  return axiosInstance.post("/login", payload);
};
export const updateUserPassword = (payload: IResetPass) => {
  return axiosInstance.put("/u/update/password", payload, setHeaders());
};

export const getUser = () => {
  return axiosInstance.get("/user", setHeaders());
};

// export const getUser = () => {
//   return axiosInstance.post("/users/u");
// };
// export const getMovies = () => {
//   return axiosInstancewithheader.get("/movies");
// };

export const getMovies = (
  page: number,
  search: string,
  selectedOption: string
) => {
  return axiosInstance.get(
    `/movies?page=${page}&search=${search}&movie_name=${selectedOption}`
  );
};
export const addMovie = (payload: IMovie) => {
  return axiosInstancewithheader.post("/movie", payload);
};

export const addRating = (id: string, payload: IRating) => {
  return axiosInstance.post(`/movie/rating/${id}`, payload, setHeaders());
};

export const updateMovie = (payload: IMovie, movieId: number) => {
  return axiosInstance.put(`/movies/${movieId}`, payload);
};

export const deleteMovie = (movieId: number) => {
  return axiosInstance.delete(`/movies/${movieId}`);
};

export const getMovie = async (movieId: number) => {
  return axiosInstance.get(`/movies/${movieId}`);
};
