import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Authenticate = ({ component: Component, isAuthenticated, ...rest}) =>  (
    <Route 
      {...rest} 
      render={ props => !isAuthenticated ?
         (<Redirect to='/login' />) :
          (<Component {...props} />)
     }
      
    />
  );

Authenticate.propTypes = {
  isAuthenticated: PropTypes.bool
};
 const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
 });
export default connect(mapStateToProps)(Authenticate);