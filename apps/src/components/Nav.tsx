import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="titleBar">
      <Link to="/movie" className="logo">
        IMDB
      </Link>

      <ul className="navBar">
      <li className="signup">
          <Link to="/add">Add movie</Link>
        </li>
        <li className="signup">
          <Link to="/add">SignUp</Link>
        </li>
        <li className="login">
          <Link to="/login">LogIn</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Nav;
