import React from 'react';
import "./Navbar.css"
import Navigation from './Navigation';
import NavMobile from './NavMobile';
  
const Navbar = () => {
  return (
    <div className="navbar-main-div">
      <Navigation />
      <NavMobile />
    </div>
      
  
    )
};

export default Navbar;
