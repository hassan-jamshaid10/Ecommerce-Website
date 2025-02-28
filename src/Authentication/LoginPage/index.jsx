import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Features/authSlice"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/"); // Redirect on successful login
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
        <h2>Welcome to Admin Panel</h2>
        <h3>{error && <span className="error">{error}</span>}</h3>
        <form className="form" onSubmit={handleLogin}>
          <div className="textbox">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="textbox">
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <a href="/Auth/forgot">Forgot Password?</a>
        <p className="footer">
          Don't have an account? <a href="/Auth/Signup">Register!</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
