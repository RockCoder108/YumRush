import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<h1>User Register</h1>} />
        <Route path="/user/login" element={<h1>User Login</h1>} />
        <Route path="/foodpartner/register" element={<h1>Food Partner Register</h1>} />
        <Route path="/foodpartner/login" element={<h1>Food Partner Login</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes
