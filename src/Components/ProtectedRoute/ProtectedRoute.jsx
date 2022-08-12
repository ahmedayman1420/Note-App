import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoute = () => {
  const token = localStorage.getItem("noteToken");
  let auth = false;
  try {
    var decoded = jwt_decode(token);
    auth = true;
  } catch (error) {
    auth = false;
    localStorage.clear();
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
