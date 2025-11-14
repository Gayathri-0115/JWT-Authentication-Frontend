import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account created successfully!");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container">
      <div className="register-form">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={(e)=>setForm({...form, name:e.target.value})}/>
          <input type="email" placeholder="Email" name='email' onChange={(e)=>setForm({...form, email:e.target.value})}/>
          <input type="password" placeholder="Password" name='password' onChange={(e)=>setForm({...form, password:e.target.value})}/>
          <button className='register-btn'>Register Now</button>
        </form>
        <p>Already have an account? 
          <button className='log' onClick={() => navigate("/login")}>Login</button>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
