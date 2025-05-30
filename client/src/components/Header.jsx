import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  const isHomePage = "true"

  const [isActive, setIsActive] = useState(false)
  // const [menuDisplay, setMenuDisplay]  = useState({})

  function responsiveNavMenu () {
    if (isActive == true) {
      setIsActive(false)
    }
    else {
      setIsActive(true)
    }

    //resets the drop down menu itself to display if clicked previously
    setMenuDisplay({display: "block"})
  }

  function hideMenu () {
    setIsActive(false)
  }


  return (
    <header>
      <div className="container">
        <a href="/"><div className="header-link-cont">   
          <img src="header logo.png" alt="logo"/>
          <img src="header gears.png" alt="logo gears"/>            
        </div></a>

        <div className="navbar">
          <div className="hamburger" onClick={responsiveNavMenu}><span className={isActive ? "span-active" : undefined}></span></div>
          <ul className={isActive ? "nav-items is-active" : "nav-items" } onClick={hideMenu}>
            {window.location.pathname === '/' && (
              <>
                <li className="nav-item" ><a href="#about-us">About Us</a></li>
                <li className="nav-item"><a href="#estimates">Receive Estimate</a></li>
                <li className="nav-item"><a href="#case-studies">Case Studies</a></li>
              </>
              )}   
              {window.location.pathname === '/contact-us' ? (     
              <li className="nav-item"><a href="/#estimates">Receive Estimate</a></li> 
                ) : (
              <li><Link to="/contact-us">Contact-Us</Link></li>
            )}
          </ul>
        </div>        
      </div>
    </header>
  )
}

export default Navbar;

