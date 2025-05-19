import { Link } from "react-router-dom";
import React from 'react'
 
import "./Header.css"
const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/search" className="nav-link">Search</Link>
        <Link to="/headline" className="nav-link">Headline</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </div>
  )
}

export default Header
