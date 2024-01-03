import { Link } from "react-router-dom";
import avatar from "../assets/image.png";

const Nav = () => {
  return (
    <nav className="titleBar">
      <Link to="/movies" className="logo">
        IMDB
      </Link>

      <ul className="navBar">
        <Link to="/user">
          <img className="icon" src={avatar} alt="Avatar" />
        </Link>
        <li className="signup">
          <Link to="/addmovie">Add movie</Link>
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
