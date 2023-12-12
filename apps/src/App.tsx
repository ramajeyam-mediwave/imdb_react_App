import "@picocss/pico";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import LoginForm from "./components/loginform";
import MovieCard from "./pages/movie";
import MovieList from "./pages/movie";

const Add = lazy(() => import("./pages/Add"));

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/movie" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
