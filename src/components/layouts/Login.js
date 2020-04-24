import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { loginUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import Alert from '../Alert';
const Login = ({ setAlert, loginUser, isAuthenticated }) => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  }

  const handleLogin = e => {
    e.preventDefault();
    const { email, password } = state;
    if (!email || !password) {
      setAlert('All fields are required');
    }else{
      loginUser(email, password);
    }

  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <form onSubmit={handleLogin} name="login-form" className="form my-2">

        <h1 className="text text-primary p-1"> <span className="fa fa-sign-in"></span> Login</h1>
        <p className="py-1">Login to see the new excitement</p>

        <sup>*</sup> Required
        
          <Alert />
         {/* <!-- Email --> */}
        <div className="form-group">
          <label for="email">Email<sup>*</sup></label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            className="form-control" />
        </div>

        {/* <!-- Password --> */}
        <div className="form-group">
          <label for="password">Password<sup>*</sup></label>
          <input name="password" onChange={handleChange} type="password" placeholder='Password' id='password' className="form-control" />
        </div>

        <div className="form-group">
          <input value="Login" type="submit" className="btn btn-primary my-1" />
        </div>

        <span> Don't have an account ? <Link to="/register">Register</Link></span>
      </form>
    </Fragment>
  );
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, loginUser })(Login);