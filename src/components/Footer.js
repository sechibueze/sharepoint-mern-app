import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Fragment>
      <p style={{
        lineHeight: 1.5,
        margin: 'auto',
        padding: '1rem 0rem',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#333'
      }}> &copy; 2020 | 
      <Link 
        to='https://sechibueze.github.io'
        style={{
          color: '#fff'
        }}
      > Samuel Chibueze </Link></p>

    </Fragment>
  );
}
 
export default Footer;