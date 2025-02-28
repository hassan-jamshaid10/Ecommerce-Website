import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Features/authSlice";
import "./forgot.css";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const resultAction = await dispatch(forgotPassword(email));
    if (forgotPassword.fulfilled.match(resultAction)) {
      setSuccessMessage("Reset link sent to your email.");
      setEmail("");
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
        <h3>Enter your email to receive a reset link</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
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

export default ForgotPassword;
