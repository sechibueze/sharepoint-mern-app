import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const [state, setState ] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const [message, setMessage ] = useState('');

  const handleChange = ({ target }) => {
    const { name , value} = target;
    setState({...state, [name] : value});
  }

  const handleRegistration = e => {
    e.preventDefault();
    
  }
  console.log('state', state)
  return ( 
    <Fragment>
      <form onSubmit={handleRegistration} name="register-form" className="form my-2">
        <h1 className="text text-primary p-1"> <span className="fa fa-user"></span> Signup</h1>
        <p className="py-1">Join our community of professionals</p>
        <sup>*</sup> Required
          {message && <p className="alert alert-danger">{message} </p>} 
        {/* <!-- Name field --> */}
      <div className="form-group">
          <label for="name">Name</label>
          <input 
            name="name"
            onChange={handleChange} 
            placeholder="Firstname Lastname" 
            type="text" 
            className="form-control" />
        </div>

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
        <input name="password" onChange={handleChange}  type="password" placeholder='Password' id='password' className="form-control" />
        </div>

        {/* <!-- Confirm Password --> */}
      <div className="form-group">
          <label for="confirm_password">Confirm password<sup>*</sup></label>
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
 
export default Register;