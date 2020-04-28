import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <Fragment>
      <h1 className='text text-dark'> 404 </h1>
      <h4> 
        <a href='https://sharepoint-connect.herokuaoo.com'
        rel='noopener noreferrer'
        target='_blank'
      >Back to safety</a></h4>
    </Fragment>
  );
}
 
export default NotFound;