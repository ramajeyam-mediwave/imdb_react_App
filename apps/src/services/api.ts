import axios from "axios";
import { IUserAdd, Ilogin } from "../type";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
});

export const addUser = (payload: IUserAdd) => {
  return axiosInstance.post("/signup", payload);
};
export const loginUser = (payload: Ilogin) => {
  return axiosInstance.post("/login", payload);
};
