import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    //*replace historyi siliyor
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
