import React, { Fragment } from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
  return (
    <Fragment>
      <img 
        src={spinner} 
        style={{
          display: 'block',
          margin: 'auto',
          width: '220px',
          textAlign: 'center'
        }}
        alt='Loading...'
      />
    </Fragment>
  );
}
 
export default Spinner;