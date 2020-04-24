import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';
// import { loadUser } from '../../actions/authActions';
import { getCurrentProfile } from '../../actions/profileActions';
import PropTypes from 'prop-types';
import Education from '../Education';
import Experience from '../Experience';
import DashboardActions from '../DashboardActions';
import Alert from '../Alert';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Dashboard = ({ user, getCurrentProfile, currentProfile }) => {
  
  // component did update
   useEffect(() => getCurrentProfile(),  []);
  

  return (
    <Fragment>
      <div className="mb-1">
        <p className="text text-primary fa fa-user">Welcome, { user && user.name}</p>
      </div>

      <DashboardActions />
      <Alert />

      {currentProfile === null ? 
        (
          <Fragment>
            <div className=''>
              Don't have a profile yet, <Link to='/create-profile'>Create one here</Link>
            </div>
          </Fragment>
        ) : 
        (
          <Fragment>

            {
              currentProfile.education &&
              <Education educations={currentProfile.education} />
            }
            {
              currentProfile.experience &&
              <Experience experiences={currentProfile.experience} />
            }
          </Fragment>
        )}


      {/* { 
        currentProfile.education && 
        <Education educations={currentProfile.education} />
        
      } */}
    
      {/* Manage Experience */}
      {/* {
        currentProfile.experience &&
        <Experience experiences={currentProfile.experience} />
      } */}
      
    </Fragment>
  );
}
Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  getCurrentProfile: PropTypes.func.isRequired,
  currentProfile: PropTypes.object,
  user: PropTypes.object
};
 const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   user: state.auth.user,
   currentProfile: state.profile.currentProfile
 });
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);