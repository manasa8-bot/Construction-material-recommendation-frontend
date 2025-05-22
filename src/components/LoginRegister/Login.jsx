import { useState } from "react";
import axios from "axios";
import "./LoginRegister.css";
import { Link, useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "", remember: false });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://construction-material-recommendation-system-backend-mu.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      alert(data.message);
      if (res.ok) navigate("/home");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://construction-material-recommendation-system-backend-mu.vercel.app/register", registerData);
      alert(res.data.message);
      setIsLogin(true);
    } catch (err) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? "Welcome Back" : "Create Account"}</h2>
        <p className="auth-subtext">{isLogin ? "Login to your account" : "Sign up to get started"}</p>

        <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
          {!isLogin && (
            <div className="input-field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                required
                placeholder="Enter your username"
              />
            </div>
          )}

          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={isLogin ? loginData.email : registerData.email}
              onChange={isLogin ? handleLoginChange : handleRegisterChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={isLogin ? loginData.password : registerData.password}
              onChange={isLogin ? handleLoginChange : handleRegisterChange}
              required
              placeholder="Enter your password"
            />
          </div>

          {isLogin && (
            <div className="options-row">
              <label className="remember-label">
                <input
                  type="checkbox"
                  name="remember"
                  checked={loginData.remember}
                  onChange={(e) => setLoginData({ ...loginData, remember: e.target.checked })}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>

          <div className="toggle-link">
            {isLogin ? (
              <p>Don't have an account? <span onClick={() => setIsLogin(false)}>Register</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
