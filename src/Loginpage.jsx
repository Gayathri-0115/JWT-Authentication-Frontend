import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const Loginpage = ({ setUser }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      navigate("/home");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container">
      <div className="login-form">

        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              onChange={(e) => setForm({...form, password: e.target.value})}
            />
          </div>

          <button className="form-button">Login</button>
        </form>

        <p>Don't have an account? 
          <button className='register' onClick={() => navigate("/signup")}>Register</button>
        </p>

      </div>
    </div>
  );
};

export default Loginpage;
