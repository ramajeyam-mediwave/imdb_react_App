import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="titleBar">
      <Link to="/" className="">
        MYIMDB
      </Link>

      <ul className="navBar"></ul>
    </nav>
  );
};

export default Nav;
