import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../Features/authSlice"; 
import { useNavigate } from "react-router-dom";
import "./register.css";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, phone, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // if (!/^[0-9]{10}$/.test(phone)) {
    //   alert("Please enter a valid 10-digit phone number!");
    //   return;
    // }

    const resultAction = await dispatch(signupUser({ username, email, phone, password }));
    if (signupUser.fulfilled.match(resultAction)) {
      navigate("/Auth/login");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/Auth/login");
    }
  }, [user, navigate]);

  return (
    <div className="body">
      <img src="/blob.svg" alt="Blob Image" className="blob" />
      <div className="orbit"></div>

      <div className="register">
        <img src="/logo.png" alt="Logo" />
        <h2>Create Your Account</h2>
        <h3>{error && <span className="error">{error}</span>}</h3>
        
        <form className="form" onSubmit={handleRegister}>
          <div className="textbox">
            <input required type="text" name="username" value={username} onChange={handleChange} />
            <label>Full Name</label>
          </div>
          <div className="textbox">
            <input required type="email" name="email" value={email} onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="textbox">
            <input required type="tel" name="phone" value={phone} onChange={handleChange} />
            <label>Phone Number</label>
          </div>
          <div className="textbox">
            <input required type="password" name="password" value={password} onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="textbox">
            <input required type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
            <label>Confirm Password</label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        
        <p className="footer">
          Already have an account? <a href="/Auth/login">Login!</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
