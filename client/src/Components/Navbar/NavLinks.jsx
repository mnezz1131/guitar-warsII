import React from "react";
import { motion } from 'framer-motion'
import {Link} from "react-router-dom"

const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y:-40}
  const animateTo = { opacity: 1, y: 0 }
  
  return (
    <div>
      <ul className="nav-ul">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.05}}
          className="nav-li"
          onClick={() => props.isMobile ? props.closeMobileMenu() : null}
        >
          <Link className="nav-link" to="/home">Home</Link>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.10}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link className="nav-link" to="/guitar-wars">GuitarWars</Link>
     
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.20}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link className="nav-link" to="/guitar-wiki">Research</Link>
        
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.30}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
        <Link className="nav-link" to="/guitar-vids">Videos</Link>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.40}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
        <Link className="nav-link" to="/guitar-list">Lists</Link>

        
        </motion.li>
      </ul>
    </div>
  );
};

export default NavLinks;
