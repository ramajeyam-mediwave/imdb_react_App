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
        <div className="total-div">
         
          <h3 style={{ color: "blue", textAlign: "center" }}>{error}</h3>
          <div className="text" >
            <h2>Firstname: {user?.first_name}</h2>
            <h2>Lastname: {user?.last_name}</h2>
            <h2>User_name: {user?.user_name}</h2>
            <h2>Email: {user?.email}</h2>
            <h2>Phone_no: {user?.phone_no}</h2>
          </div>
          <button onClick={handleLogout} className="log-out">Log out</button>
        
        <Link to="/update">
              <button className="update-btn">Update</button>
            </Link>

            <Link to="/changepass">
              <button className="update-btn">Change Password</button>
            </Link>
            </div>
      </Layout>
    </>
  );
};
export default User;
