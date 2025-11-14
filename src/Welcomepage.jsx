import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profilepage.css';
import authimg from './assets/auth.jpg';

const Welcomepage = () => {
  const navigate = useNavigate();

  return (
    <div className='profile-container'>
      <div className='grid-sec'>
        <div className='grid-two'>
          <img src={authimg} alt="" className='authimg' />
        </div>
        <div className='grid-one'>
          <h2>React JWT Auth System</h2>
         <p> This project demonstrates user authentication using JSON Web Tokens (JWT). You can log in or create an account to see how secure token-based access works.</p>

          <div className='btns'>
            <button className='login' onClick={() => navigate("/login")}>
              Log In
            </button>
            <button className='signup' onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
