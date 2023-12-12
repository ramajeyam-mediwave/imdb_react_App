import Layout from "../components/layout";

function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Layout title="Login">
      <div className="">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
}

export default LoginForm;
