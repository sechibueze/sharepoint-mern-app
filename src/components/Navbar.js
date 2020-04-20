import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return ( 
    <nav className="navbar bg-dark py-1">
      <div className="container clearfix">

        <Link className="logo logo-link" to='/'>
          <span className="logo-icon fa fa-book fa-2x"></span>
          {' '}
          <span className="logo-text">Educatus</span>
        </Link>


        
      {/* <span className="menu-toggler fa fa-bars fa-2x"></span> */}

      
      <div className="navlinks">
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/profiles'>Profiles</Link>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;