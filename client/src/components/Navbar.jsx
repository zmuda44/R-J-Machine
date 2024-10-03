import { Link } from 'react-router-dom';

const Navbar = () => {



  return (
    <div className="page-top">
      <header>
        <div className="container">
          <a href="/"><img src="header logo.png" alt="logo"/></a>
          <ul className="navbar">
            <li className="nav-item"><a href="#about-us">About Us</a></li>
            <li className="nav-item"><a href="#estimates">Receive Estimate</a></li>
            <li className="nav-item"><a href="#case-studies">Case Studies</a></li>   
            <li className="nav-item"><Link key={3} to="/contact-us">Contact Us</Link></li>
          </ul>        
        </div>
      </header>


    </div>

  )
}


export default Navbar;


{/* <li className="nav-item"><Link key={1} to="/products">Products</Link></li>
          <li className="nav-item"><Link key={2} to="/services">Services</Link></li> */}