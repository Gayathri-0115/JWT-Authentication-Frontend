import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/logout`, {
      method: "POST",
      credentials: "include"
    });

    setUser(null);
    navigate("/");
  };

  return (
    <div className='home-container'>
        <div className='nav'>
            <h3 className='nav-title'>React JWT Auth System</h3>
            <button className='nav-btn' onClick={handleLogout}>Logout</button>
        </div>

        <div className='home-grid'>
            <div className='grid-first'>
                <h4>Welcome, {user?.name}!</h4>
                <p>You're successfully authenticated with JWT.</p>
            </div>

            <div className='grid-second'>
                <h3>Your Information</h3>
                <div className='details'>
                    <p>Name : {user?.name}</p>
                    <p>Email : {user?.email}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Homepage;
