import LoginForm from "../components/loginform";
import { getToken } from "../services/api";
import { IUserAdd } from "../type";
function LoginPage() {
  async function handleLogin(user: IUserAdd) {
    try {
      const userPayload = {
        email: user.email,
        user_password: user.user_password,
      };
      console.log(userPayload);
      const response = await getToken(userPayload);
      console.log(response.data.gen_token);
      localStorage.setItem("token", response.data.gen_token);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error deleting movie:", error);
      }
    }
  }
  return <LoginForm handleLogin={(user) => handleLogin(user)} />;
}

export default LoginPage;
