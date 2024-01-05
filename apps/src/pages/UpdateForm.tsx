import { useEffect, useState } from "react";
import Form from "../components/Form";
import Layout from "../components/layout";
import { IUserAdd } from "../type";
import { getUser, updateUser } from "../services/api";

function UpdateForm() {
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    phone_no: "",
  });
  const [error, setError] = useState<string>("");
  // const [user, setUser] = useState<IUserAdd>(details);

  useEffect(() => {
   
    async function getUserFromAPI() {
      try {
        const response = await getUser();
        setDetails(response.data.searchUser);
      } catch (error: any) {
        console.log(error);
        setError(
          error.response?.data ||
            "An error occurred while fetching user details."
        );
      }
    }
    
    
    getUserFromAPI();
  }, []);

  async function handleUpdateUser(updatedUser: IUserAdd) {
    try {
      const response = await updateUser(updatedUser);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      setError(
        error.response?.data.message ||
          "An error occurred while updating user details."
      );
    }
  }

  console.log(details);

  return (
    <>
      <Layout title="update">
        <h1>UpdateForm</h1>
        <Form
          details={details}
          type="update"
          handleAddMovie={handleUpdateUser} 
        />
        {error && <p>{error}</p>}
      </Layout>
    </>
  );
}

export default UpdateForm;
