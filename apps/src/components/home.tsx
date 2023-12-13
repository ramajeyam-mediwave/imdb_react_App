import Layout from "./layout";
// import { Link } from "react-router-dom";
function Home() {
  return (
    <Layout title="Home">
      <div className="center-container">
        <h1>IMDB Home Page</h1>
      </div>
      {/* <div>
        <h2>login to view the movies</h2>
      </div> */}
      <div className="link-container">
        {/* <p>
          <Link to="/add">
            <button>Sign Up</button>
          </Link>
        </p>
      </div>
      <div>
        <p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </p> */}
      </div>
    </Layout>
  );
}

export default Home;
