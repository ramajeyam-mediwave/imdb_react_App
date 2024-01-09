import "@picocss/pico";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/movie";
import LoginPage from "./pages/loginform";
import HomePage from "./pages/home";
import MovieForm from "./pages/addmoviepage";
import SingleMovie from "./pages/singlemoviepage";
import PrivateRoutes from "./components/PrivateRoutes";
import User from "./pages/user";
import UpdateForm from "./pages/UpdateForm";
import ChangePassword from "./pages/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword";
import OtpPage from "./pages/OtpPage";
import UpdateNewPassword from "./pages/updateNewPassword";

const Add = lazy(() => import("./pages/Add"));

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/otp/:id" element={<OtpPage />} />
          <Route path="/setpassword/:id" element={<UpdateNewPassword />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/movies" element={<MovieList />} />
            <Route path="/addmovie" element={<MovieForm />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
            <Route path="/user" element={<User />} />
            <Route path="/update" element={<UpdateForm />} />
            <Route path="/changepass" element={<ChangePassword />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
