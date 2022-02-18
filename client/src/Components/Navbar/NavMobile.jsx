import React from 'react';
import NavLinks from './NavLinks';
import {CgMenu, CgCloseR} from "react-icons/cg";
import { useState } from 'react'



const NavMoblie = () => {
  const [open, setOpen] = useState(false);

  const hamburgerOpen =  <CgMenu className="hamburger" size='40px' color="white"
  onClick = {() => setOpen(!open)}  />

  const hamburgerClose =  <CgCloseR className="hamburger" size='40px' color="white"
    onClick={() => setOpen(!open)} />
  
  const closeMobileMenu = () => setOpen(false); 
  

  return (

    <nav className="navMobile-main-div">
      {open ? hamburgerClose : hamburgerOpen}
      {open ? <NavLinks isMobile={true} closeMobileMenu = {closeMobileMenu}/> : null}
    </nav>
  )
};

export default NavMoblie;
