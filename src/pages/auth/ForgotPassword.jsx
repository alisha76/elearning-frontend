import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";
import forgotPasswordImage from "../../assets/Images/images (1).png";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/forgot`, { email });

      toast.success(data.message);
      navigate("/login");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-form"
            data-aos="zoom-in"
    data-aos-duration="1000"
      >
      <img src={forgotPasswordImage} alt="Forgot Password Image" className="auth-image" />
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Enter Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button disabled={btnLoading} className="common-btn">
            {btnLoading ? "Please Wait..." : "Forgot Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;