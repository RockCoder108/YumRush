import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import CreateFood from '../pages/foodpartner/CreateFood';
import Profile from '../pages/foodpartner/Profile';
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/foodpartner/register" element={<FoodPartnerRegister />} />
        <Route path="/foodpartner/login" element={<FoodPartnerLogin />} />
        <Route path="/" element={<><Home /><BottomNav /></>} />
        <Route path="/createfood" element={<CreateFood />} />
        <Route path="/foodpartner/:id" element={<Profile />} />
        <Route path="/saved" element={<><Saved /><BottomNav /></>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes
