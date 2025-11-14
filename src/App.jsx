import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Loginpage from './Loginpage';
import RegisterPage from './RegisterPage';
import Welcomepage from './Welcomepage';
import Homepage from './Homepage';

function App() {
  const [user, setUser] = useState(null);

  // load logged-in user
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/me`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (res) => {
        if (!res.ok) {
          setUser(null);
          return;
        }
        const data = await res.json();
        setUser(data.user);
      })
      .catch((err) => {
        console.error("Failed to fetch user", err);
        setUser(null);
      });
  }, []);

  return (
    <BrowserRouter>

      <Routes>

        {/* Welcome Page */}
        <Route path="/" element={<Welcomepage />} />

        {/* Login */}
        <Route 
          path="/login" 
          element={
            user ? <Navigate to="/home" /> : <Loginpage setUser={setUser} />
          } 
        />

        {/* Signup */}
        <Route 
          path="/signup" 
          element={
            user ? <Navigate to="/home" /> : <RegisterPage />
          } 
        />

        {/* Protected Home */}
        <Route 
          path="/home" 
          element={
            user ? <Homepage user={user} setUser={setUser} /> 
                 : <Navigate to="/" />
          } 
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
