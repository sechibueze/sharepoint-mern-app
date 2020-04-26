import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return ( 
    <Fragment>
      <div className="banner">
        <div className="landing">
          <div className="container">
            <h1 className="large">Sharepoint</h1>
            <p className="info my-1 p-2"> 
            We are a community committed to developing professionalism by 
            sharing knowledge and skills you'll need to thrive in today's workplace. 
            Looking for a new challenge? or an opportunity to learn, reflect and share
            in ways that enhance your value ?
            </p>
           
            <div className="buttons my-1">
              <Link className="btn btn-primary mx-1" to="/register">Signup</Link>
              <Link className="btn btn-success mx-1" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment> );
}
 
export default Home;