import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navigationbar from "./Components/Navigationbar/Navigationbar";
import Register from "./Components/Register/Register";

import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
