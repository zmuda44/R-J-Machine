import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const isHomePage = "true"


  return (
    <div className="page-top">
      <header>
        <div className="container">
          <h1>Welcome to the admin only dashboard</h1>
          <a href="/"><h3>Click here to go to homepage</h3></a>
          
        </div>
      </header>


    </div>

  )
}


export default AdminNavbar;


{/* <li className="nav-item"><Link key={1} to="/products">Products</Link></li>
          <li className="nav-item"><Link key={2} to="/services">Services</Link></li> */}