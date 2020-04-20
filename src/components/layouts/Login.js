import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  }

  const handleLogin = e => {
    e.preventDefault();

  }

  return (
    <Fragment>
      <form onSubmit={handleLogin} name="login-form" className="form my-2">

        <h1 className="text text-primary p-1"> <span className="fa fa-sign-in"></span> Login</h1>
        <p className="py-1">Login to see the new excitement</p>

        <sup>*</sup> Required
          {message && <p className="alert alert-danger">{message} </p>}
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

export default Login;