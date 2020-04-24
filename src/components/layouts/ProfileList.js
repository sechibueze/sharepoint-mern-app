import React, { Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProfiles }  from '../../actions/profileActions';
import ProfileCard from '../ProfileCard';

const ProfileList = ({ getAllProfiles, allProfiles }) => {
 
  useEffect(() => getAllProfiles(), []);
  
  return (
    <Fragment>
      <div className="profile-listing">
        <div className="intro">
          <h1 className="text text-primary">Educators</h1>
          <p className="">Browse and connect with Educators</p>
        </div>
        {allProfiles.length < 1 ?
         (<h1> Loading ...</h1>) :
          (allProfiles.map( profile => 
            <ProfileCard key={`render-profile-${ profile._id}`} profile={profile}/>) )}
       

      </div>
    </Fragment>
  );
}
ProfileList.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  allProfiles: PropTypes.array
};
 const mapStateToProps = state => ({
   allProfiles: state.profile.allProfiles
 });
export default connect(mapStateToProps, { getAllProfiles })(ProfileList);