import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../Features/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./reset.css";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const { password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const token = searchParams.get("token"); // Assuming the reset token is passed as a query parameter
    if (!token) {
      alert("Invalid or missing reset token.");
      return;
    }

    const resultAction = await dispatch(resetPassword({ token, password }));
    if (resetPassword.fulfilled.match(resultAction)) {
      setSuccessMessage("Password reset successfully. You can now log in.");
      setFormData({ password: "", confirmPassword: "" });
      setTimeout(() => navigate("/Auth/login"), 2000);
    }
  };

  const imageProps = {
    src: "/blob.svg",
    alt: "Blob Image",
  };

  return (
    <div className="body">
      <img {...imageProps} className="blob" />
      <div className="orbit"></div>

      <div className="login">
        <img src="/logo.png" alt="Logo" />
        <h2>Reset Your Password</h2>
        <h3>Enter a new password for your account</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <label>New Password</label>
          </div>
          <div className="textbox">
            <input
              required
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <p className="footer">
          Remembered your password? <a href="/Auth/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
