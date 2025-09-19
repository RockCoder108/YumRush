import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/Navbar.css' // Create this file for styles
import { NavLink } from "react-router-dom";
import "../../styles/bottom-nav.css";

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="navbar-brand" onClick={() => navigate('/')}>Zomato</span>
            </div>
            <div className="navbar-right">
                <button className="navbar-btn" onClick={() => navigate('/user/login')}>Login</button>
                <button className="navbar-btn" onClick={() => navigate('/user/register')}>Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar