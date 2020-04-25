import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import PropTypes from 'prop-types';
import Education from '../Education';
import Experience from '../Experience';
import DashboardActions from '../DashboardActions';
import Alert from '../Alert';
const Dashboard = ({ user, getCurrentProfile, currentProfile,
  addEducation,
  addExperience,
  deleteExperience,
  deleteEducation,
  createProfile
 }) => {
  
  // component did update
  useEffect(() => getCurrentProfile(), [addEducation,
    addExperience,
    deleteExperience,
    deleteEducation,
    createProfile]);
  
  return (
    <Fragment>
      <div className="mb-1">
        <p className="text text-primary fa fa-user">Welcome, { user && user.name}</p>
      </div>  
      {!currentProfile  ? 
        (
          <Fragment>
            <div className=''>
              Don't have a profile yet, 
              <Link className='btn btn-primary my-2' to='/create-profile'
                style={{ display: 'block'}}
              >Create one here</Link>
            </div>
          </Fragment>
        ) : 
        (
          <Fragment>
            <DashboardActions />
            <Alert />
            <p className="text text-primary">Education</p>
            {
              
              currentProfile.education &&
              <Education educations={currentProfile.education} />
            }
            <p className="text text-primary">Experiences</p>
            {
              currentProfile.experience &&
              <Experience experiences={currentProfile.experience} />
            }
          </Fragment>
        )}
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
   currentProfile: state.profile.currentProfile,
   addExperience: state.profile.addExperience,
   addEducation: state.profile.addEducation,
   createProfile: state.profile.createProfile,
   deleteEducation: state.profile.deleteEducation,
   deleteExperience: state.profile.deleteExperience
     
 });
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);