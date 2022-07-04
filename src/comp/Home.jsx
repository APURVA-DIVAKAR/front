import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <div>
        <button onClick={() => navigate("/signup")}>Signup</button>
      </div>
      <div>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

export default Home;
