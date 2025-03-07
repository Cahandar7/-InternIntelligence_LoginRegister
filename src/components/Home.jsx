import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="intro-box">
      <h1 className="intro-h1">Welcome Back!</h1>
      <Link to={"/"} className="intro-btn">
        Log out
      </Link>
    </div>
  );
};

export default Home;
