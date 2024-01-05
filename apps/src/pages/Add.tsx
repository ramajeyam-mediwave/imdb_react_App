import Form from "../components/Form";
import Layout from "../components/layout";
import { addUser } from "../services/api";
import { IUserAdd } from "../type";

function SignupForm() {
  async function handleAddMovie(user: IUserAdd) {
    try {
      const userPayload = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name,
        user_password: user.user_password,
        phone_no: user.phone_no,
      };
      console.log(userPayload);
      const response = await addUser(userPayload);
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error deleting movie:", error);
      }
    }
  }
  return (
    <>
      <Layout title="signup">
        <h1>Signup</h1>
        <Form handleAddMovie={handleAddMovie} type="signup" />
      </Layout>
    </>
  );
}

export default SignupForm;
