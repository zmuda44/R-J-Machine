import { Link } from 'react-router-dom';

const Navbar = () => {
  const isHomePage = "true"


  return (
    // <div className="page-top">
      <header>
        <div className="container">

          <a href="/"><div className="header-link-cont">
            <img id="background" src="header logo bg.png" alt="logo-background"/>            
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
                <li className="nav-item"><a href="/contact-us">Contact Us</a></li>
            )}
          </ul>        
        </div>
      </header>


    // </div>

  )
}


export default Navbar;


{/* <li className="nav-item"><Link key={1} to="/products">Products</Link></li>
          <li className="nav-item"><Link key={2} to="/services">Services</Link></li> */}