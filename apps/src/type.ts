export interface IUserAdd {
  first_name?: string;
  last_name?: string;
  email: string;
  user_name?: string;
  user_password: string;
  phone_no?: string;
}
export interface Ilogin {
  email: string;
  user_password: string;
}

export interface IMovie {
  movie_name: string;
  release_year: number;
  image: string;
  movie_desc: string;
  rating?: number;
}
