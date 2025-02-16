import { Link } from "react-router-dom";

const Navbar = () => {
  const isHomePage = "true"

  return (
    <header>
      <div className="container">
        <a href="/"><div className="header-link-cont">   
          <img src="header logo.png" alt="logo"/>
          <img src="header gears.png" alt="logo gears"/>            
        </div></a>

        <ul className="navbar">
          {window.location.pathname === '/' && (
            <>
              <li className="nav-item"><a href="#about-us">About Us</a></li>
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
    </header>
  )
}

export default Navbar;

