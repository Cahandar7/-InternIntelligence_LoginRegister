import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import supabase from "../supabaseClient.js";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        title: "Warning!",
        text: "Email and password cannot be empty.",
        icon: "warning",
      });
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        icon: "warning",
      });
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (rememberMe) {
        localStorage.setItem("email", email);
      }

      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      Swal.fire({
        title: "Oops!",
        text: err.message || "Something went wrong. Try again.",
        icon: "error",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-register-wrapper">
      <form onSubmit={handleSubmit}>
        <h5 className="wrapper-title">Sign in</h5>

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
            <FaEyeSlash
              className="icon"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FaEye
              className="icon"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <div className="remember-forgot">
          <div className="remember">
            Remember me
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>
          <Link
            to="/reset-password"
            className="forgot"
            onClick={() => {
              navigate("/reset-password");
            }}
          >
            Forgot password?
          </Link>
        </div>

        <div className="btn-box">
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </div>

        <div className="go-register">
          Don't have an account?
          <Link to={"/register"} className="go">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
