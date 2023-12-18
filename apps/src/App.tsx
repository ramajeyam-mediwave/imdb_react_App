import "@picocss/pico";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/movie";
import LoginPage from "./pages/loginform";
import HomePage from "./pages/home";
import MovieForm from "./pages/addmoviepage";
import SingleMovie from "./pages/singlemoviepage";

const Add = lazy(() => import("./pages/Add"));

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/addmovie" element={<MovieForm />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
