import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';
const Navbar = ({ isAuthenticated, logout }) => {
  // For Logged in users
  const authLinks = (
    <div className="navlinks">
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/profiles'>Profiles</Link>
      <span onClick={() => logout()}> Logout </span>
    </div>
  );
  // For visitors
  const guestLinks = (
    <div className="navlinks">
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link> 
    </div>
  );
  return ( 
    <nav className="navbar bg-dark py-1">
      <div className="container clearfix">

        <Link className="logo logo-link" to='/'>
          <span className="logo-icon fa fa-connectdevelop fa-2x"></span>
          {' '}
          <span className="logo-text">Sharepoint</span>
        </Link>

          { isAuthenticated ? authLinks : guestLinks }      
      </div>
    </nav>
   );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired
};
 const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
 });
export default connect(mapStateToProps, { logout })(Navbar);