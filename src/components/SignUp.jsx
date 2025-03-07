import React, { useState } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient.js";
import Swal from "sweetalert2";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setEmail("");
      setPassword("");
      Swal.fire({
        title: "Oops!",
        text: "Something get wrong",
        icon: "error",
      });
    }

    if (data) {
      Swal.fire({
        title: "Good job!",
        text: "Account created successfully",
        icon: "success",
      });
      navigate("/login");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-register-wrapper">
      <form onSubmit={handleSubmit}>
        <h5 className="wrapper-title">Sign up</h5>

        <div className="input-box">
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordVisible ? (
            <FaEyeSlash className="icon" onClick={togglePasswordVisibility} />
          ) : (
            <FaEye className="icon" onClick={togglePasswordVisibility} />
          )}
        </div>

        <div className="btn-box">
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </div>
        <div className="go-register">
          Already have an account?
          <Link to={"/login"} className="go">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
