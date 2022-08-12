import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Navigate } from "react-router-dom";

function Login() {
  const baseURL = "https://route-egypt-api.herokuapp.com/";
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [waiting, setWaiting] = useState(false);
  const [success, setSuccess] = useState(false);

  const getUser = ({ target }) => {
    setUser((prevUser) => {
      return { ...prevUser, [target.name]: target.value };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    setWaiting(true);
    const res = await axios.post(`${baseURL}signin`, user);
    setWaiting(false);
    if (res.data.message === "success") {
      localStorage.setItem("noteToken", res.data.token);
      setError("");
      setSuccess(true);
    } else {
      setError(res.data.message);
    }
  };

  return (
    <>
      {success && <Navigate to="/" />}
      <div className=" vh-100 d-flex justify-content-center align-items-center">
        <Form className='w-50' onSubmit={sendData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={getUser}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={getUser}
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}
          <Button className="w-100" variant="info" type="submit">
            {waiting && "Waiting ... "}
            {!waiting && "Login"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
