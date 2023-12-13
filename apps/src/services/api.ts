import axios from "axios";
import { IMovie, IUserAdd } from "../type";


const axiosInstancewithheader = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
});


export const addUser = (payload: IUserAdd) => {
  return axiosInstance.post("/signup", payload);
};




export const getToken = (payload: IUserAdd) => {
  return axiosInstance.post("/login", payload);
};

export const getUser = () => {
  return axiosInstance.post("/users/u");
};
export const getMovies = () => {
  return axiosInstancewithheader.get("/movies");
};

export const addMovie = (payload: IMovie) => {
  return axiosInstancewithheader.post("/movie", payload);
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
