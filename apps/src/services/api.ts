import axios from "axios";
import { IMovie, IUserAdd } from "../type";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
});

const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };

export const addUser = (payload: IUserAdd) => {
  return axiosInstance.post("/signup", payload);
};

export const getToken = (payload: IUserAdd) => {
  return axiosInstance.post("/login", payload);
};

export const getUser = () => {
  return axiosInstance.post("/users/u", { headers });
};
export const getMovies = () => {
  return axiosInstance.get("/movies");
};

export const addMovie = (payload: IMovie) => {
  return axiosInstance.post("/movies", payload);
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
