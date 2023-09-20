import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(Context);
  const location = useLocation();

  return user ? children : <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
