import { useEffect, useState } from "react";
import { getUser } from "../services/api";
import { IUserAdd } from "../type";
import Layout from "../components/layout";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const User = () => {
  const [user, setUser] = useState<IUserAdd>();
  const [error, setError] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    async function getUserFromAPI() {
      try {
        const response = await getUser();
        setUser(response.data.searchUser);
        console.log(response.data);
      } catch (error: any) {
        console.log(error);
        setError(error.response.data);
      }
    }
    getUserFromAPI();
  }, []);

  const handleLogout = () => {
    localStorage.clear();

    navigate('/login');
  };
  return (
    <>
      <Layout title="account">
        <div>
          <h3 style={{ color: "blue", textAlign: "center" }}>{error}</h3>
          <div>
            <h2>firstname: {user?.first_name}</h2>
            <h2>lastname: {user?.last_name}</h2>
            <h2>user_name: {user?.user_name}</h2>
            <h2>email: {user?.email}</h2>
            <h2>phone_no: {user?.phone_no}</h2>
          </div>
          <button onClick={handleLogout}>Log out</button>
        </div>
        <Link to="/update">
              <button className="update-btn">Update</button>
            </Link>
      </Layout>
    </>
  );
};
export default User;
