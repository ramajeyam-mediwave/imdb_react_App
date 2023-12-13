import { useState } from "react";
import Layout from "../components/layout";
import { IUserAdd } from "../type";
interface ILoginForm {
  handleLogin: (movie: IUserAdd) => void;
}
const LoginForm: React.FC<ILoginForm> = ({ handleLogin }) => {
  const [user, setUser] = useState<IUserAdd>({
    email: "",
    user_password: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(user);
  }

  return (
    <Layout title="Login">
      <div className="">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" onChange={handleChange} required />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="user_password"
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginForm;
