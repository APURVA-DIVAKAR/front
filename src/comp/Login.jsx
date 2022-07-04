import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let payload = JSON.stringify(user);
    fetch("http://localhost:7000/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res._id);
        if (res.token) {
          localStorage.clear();
          localStorage.setItem("userid", JSON.stringify(res._id));
          navigate("/tasks");
        } else {
          console.log(res.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login </h1>
      <div>
        <input type="text" name="username" onChange={handleChange} />
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
