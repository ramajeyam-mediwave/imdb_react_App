import { useState } from "react";
import { IUserAdd } from "../type";
interface IForm {
  handleAddMovie: (movie: IUserAdd) => void;
  details?: IUserAdd;
  type?: string;
}

const Form: React.FC<IForm> = ({ handleAddMovie, details, type }) => {
  const [user, setUser] = useState<IUserAdd>(
    details
      ? details
      : {
          first_name: "",
          last_name: "",
          email: "",
          user_name: "",
          user_password: "",
          phone_no: "",
        }
  );
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddMovie(user);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>

        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First name"
          value={details?.first_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Lastname</label>

        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last name"
          value={details?.last_name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          value={details?.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username</label>

        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Username"
          value={details?.user_name}
          onChange={handleChange}
          required
        />
        {type=="signup" && 
        <label htmlFor="password">
          Password
          <input
            type="text"
            id="user_password"
            name="user_password"
            placeholder="Password"
            value={details?.user_password}
            onChange={handleChange}
            required
            />
        </label>
          }
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone_no"
          name="phone_no"
          placeholder="Phone"
          value={details?.phone_no}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Form;
