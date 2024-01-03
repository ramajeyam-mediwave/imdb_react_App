import { useState } from "react";
import Layout from "../components/layout";
import { IUserAdd } from "../type";
import { useNavigate } from "react-router-dom";
interface ILoginForm {
  // handleLogin: (movie: IUserAdd) => void;
  handleLogin: (user: IUserAdd) => Promise<void>; 
}
const LoginForm: React.FC<ILoginForm> = ({ handleLogin }) => {
  const [user, setUser] = useState<IUserAdd>({
    email: "",
    user_password: "",
  });

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(user).then(() => {
      
      navigate('/movies');
    });
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
