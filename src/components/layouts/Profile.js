import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileByUserId } from '../../actions/profileActions';
import PropTypes from 'prop-types';
import Education from '../Education';
import Experience from '../Experience';
import Skillset from '../Skillset';
import SocialMediaLinks from '../SocialMediaLinks';
import Spinner from '../Spinner';
const Profile = ({ profileByUserId, getProfileByUserId, match }) => {

  useEffect(() => {
    const id = match.params.id;
    getProfileByUserId(id);
  }, [getProfileByUserId]);


  
  return (
    profileByUserId === null ? (<Spinner />) : (
      <Fragment>

        <div className="member-profile">
          <div className="profile-header mb-1">
            <img src={profileByUserId.user.avatar} alt={`${profileByUserId.user.name}-profile`} style={{ width: '90px', height: '90px', borderRadius: '50%' }} />
            <h1 className="text text-primary"> {profileByUserId.user.name} </h1>
            <div className="connect-icons my-2">
              {profileByUserId.website && <Link to={profileByUserId.website} className="fa fa-globe" />}
              <SocialMediaLinks socialMediaLinks={profileByUserId.socials } />
            </div>
          </div>

          <div className="skills-bio-wrapper">
            {/* <!-- Bio --> */}
            <div className="about">
              <h2 className="text text-primary"> {`${profileByUserId.user.name.split(' ')[0]}'s`} Bio</h2>
              <article className="bio p-1">
                { profileByUserId.bio }
              </article>  
            </div>

            {/* <!-- Skillset --> */}
            <div className="skillset">
              <h2 className="text text-primary"> {`${profileByUserId.user.name.split(' ')[0]}'s`}  Skillset</h2>
              <div className="p-1">
                <Skillset skills={ profileByUserId.skills} />
              </div>
            </div>
          </div>

          <div className="edu-exp-wrapper"
            style={{ overflowX: 'scroll'}}
          >
            {/* <!-- education --> */}
            <div className="education">
              <h2 className="text text-primary"> Education  </h2>
              <Education educations={profileByUserId.education} />

            </div>

            {/* <!-- Experience --> */}
            <div className="experience">
              <h2 className="text text-primary">  Experience </h2>
              <Experience experiences={profileByUserId.experience} />
            </div>
          </div>

        </div>
      </Fragment> 
    )

  );
}

Profile.propTypes = {
  getProfileByUserId: PropTypes.func.isRequired,
  profileByUserId: PropTypes.object
}
 const mapStateToProps = state => ({
   profileByUserId: state.profile.profileByUserId
 });
export default connect(mapStateToProps, { getProfileByUserId })(Profile);