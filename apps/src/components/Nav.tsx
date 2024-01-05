import { Link } from "react-router-dom";
import avatar from "../assets/image.png";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); 

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
        {isLoggedIn ? null : (
          <li className="login">
            <Link to="/login">LogIn</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
