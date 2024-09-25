import { Link } from 'react-router-dom';

const Navbar = () => {



  return (
    <header>
      <div className="container">
        <a href="/"><img src="header logo.png" alt="logo"/></a>
        <ul className="navbar">
          <li className="nav-item">About Us</li>
          <li className="nav-item">Receive Estimate</li>
          <li className="nav-item">Case Studies</li>
          <li className="nav-item"><Link key={1} to="/products">Products</Link></li>
          <li className="nav-item"><Link key={2} to="/services">Services</Link></li>
          <li className="nav-item"><Link key={3} to="/contact-us">Contact Us</Link></li>
        </ul>        
      </div>
    </header>
  )
}


export default Navbar;


