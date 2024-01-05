export interface IUserAdd {
  first_name?: string;
  last_name?: string;
  email: string;
  user_name?: string;
  phone_no?: string;
  user_password?: string;
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
  movie_id?:number
  
}
export interface IRating {
  rating: number;
}
export interface IForm {
  type: string;
}
export interface IResetPass {
  old_password: string;
  new_password: string;
}