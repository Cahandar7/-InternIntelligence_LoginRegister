import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="intro-box">
      <h1 className="intro-h1">Hey there!</h1>
      <p className="intro-p">Ready to dive in? Let's get you started.</p>
      <Link to={"/login"} className="intro-btn">
        Let's Go
      </Link>
    </div>
  );
};

export default Start;
