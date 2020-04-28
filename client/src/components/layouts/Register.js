import React, { Fragment, useState } from 'react';
import { Link , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';
import Alert from '../Alert';
const Register = ({ isAuthenticated, registerUser, setAlert}) => {
  const [state, setState ] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });


  const handleChange = ({ target }) => {
    const { name , value} = target;
    setState({...state, [name] : value});
  }

  const handleRegistration = e => {
    e.preventDefault();
    const { name, email, password,confirm_password } = state;

    if (!name || !email || !password || !confirm_password ){
      setAlert('All fields are required');
    } else if(password.trim() !== confirm_password.trim()) {
      setAlert('Password does not match');
    } else{
      registerUser({ name, email, password});
    }
  }
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
 
  return ( 
    <Fragment>
      <form onSubmit={handleRegistration} name="register-form" className="form my-2">
        <h1 className="text text-primary p-1"> <span className="fa fa-user"></span> Signup</h1>
        <p className="py-1">Join our community of professionals</p>
        <sup>*</sup> Required
          <Alert />
       
      <div className="form-group">
          <label htmlFor="name">Name <sup>*</sup> </label>
          <input 
            name="name"
            onChange={handleChange} 
            placeholder="Firstname Lastname" 
            type="text" 
            className="form-control" />
        </div>

       
      <div className="form-group">
          <label htmlFor="email">Email<sup>*</sup></label>
          <input 
            name="email" 
            onChange={handleChange} 
            type="email" 
            className="form-control"
            placeholder="ksimon@simon.com"
           />
          <small><b>Sharepoint</b> uses gravatar. Be sure to use an associated email account </small>
        </div>

    
      <div className="form-group">
          <label htmlFor="password">Password<sup>*</sup></label>
        <input name="password" onChange={handleChange}  type="password" placeholder='Password' id='password' className="form-control" />
        </div>

       
      <div className="form-group">
          <label htmlFor="confirm_password">Confirm password<sup>*</sup></label>
        <input name="confirm_password" onChange={handleChange} type="password" placeholder='Confirm Password' id='confirm_password' className="form-control" />
        </div>

        <div className="form-group">
          <input value="Register" type="submit" className="btn btn-primary my-1" />
        </div>

        <span> Already have an account ? <Link to="/login">Login</Link></span>
      </form>
    </Fragment> 
    );
}
Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};
 const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
 });
export default connect(mapStateToProps, { registerUser, setAlert })(Register);