import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import registerImage from "../../assets/Images/signup.png";

const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form"
              data-aos="fade-right"
    data-aos-duration="1000"
        >
          <h2>Register</h2>
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={btnLoading} className="common-btn">
              {btnLoading ? "Please Wait..." : "Register"}
            </button>
          </form>
          <p>
            have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="auth-image"
              data-aos="fade-left"
    data-aos-duration="1000"
        >
          <img src={registerImage} alt="register image" />
        </div>
      </div>
    </div>
  );
};

export default Register;