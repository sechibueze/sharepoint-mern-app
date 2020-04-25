import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { getCurrentProfile , createProfile } from '../../actions/profileActions';
const EditProfile = ({ createProfile, history, getCurrentProfile, currentProfile, loading }) => {
  const [profileData, setProfileData] = useState({
    status: !currentProfile.status ? '' : currentProfile.status,
    company: !currentProfile.company ? '' : currentProfile.company,
    location: !currentProfile.location ? '' : currentProfile.location,
    bio: !currentProfile.bio ? '' : currentProfile.bio,
    skills: !currentProfile.skills ? '' : currentProfile.skills.join(),
    website: !currentProfile.website ? '' : currentProfile.website,
    githubusername: !currentProfile.githubusername ? '' : currentProfile.githubusername,
    facebook: !currentProfile.socials.facebook ? '' : currentProfile.socials.facebook,
    twitter: !currentProfile.socials.twitter ? '' : currentProfile.socials.twitter,
    instagram: !currentProfile.socials.instagram ? '' : currentProfile.socials.instagram,
    linkedin: !currentProfile.socials.linkedin ? '' : currentProfile.socials.linkedin
    // youtube: !currentProfile.socials.youtube ? '' : currentProfile.socials.youtube,
  });
  const [socialLinks, toggleSocialLinks] = useState(false);
  useEffect(() => {
    if(!currentProfile) getCurrentProfile();
  }, [currentProfile]);

  // handle onChange
  const handleChange = ({ target }) => {
    setProfileData({
      ...profileData,
      [target.name]: target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createProfile(profileData, history, true);
  };

  const {
    status, company, location, bio, skills, website,
    githubusername, facebook, twitter, instagram, linkedin
  } = profileData;
  return (
    <Fragment>
      
      <form className="form" onSubmit={handleSubmit}>
        <p className="text text-primary">Edit your Profile</p>
        <sup>*</sup>Required
        <Alert />
        <div className="form-group">
          <label htmlFor="status">Status<sup>*</sup></label>
          <select name="status" required value={status} onChange={(e) => handleChange(e)} className="form-control">
            <option value="0">Select your status</option>
            <option value="Educator">Educator</option>
            <option value="Developer">Developer</option>
            <option value="Manager">Manager</option>
            <option value="CEO">CEO</option>
            <option value="Founder">Founder</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="CTO">CTO</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Fellow">Fellow</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company<sup>*</sup></label>
          <input type="text" required name="company" value={company} onChange={(e) => handleChange(e)} className="form-control" placeholder="Company" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location<sup>*</sup></label>
          <input type="text" required name="location" value={location} onChange={(e) => handleChange(e)} className="form-control" placeholder="Location" />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" value={bio} placeholder="Bio" onChange={(e) => handleChange(e)} className="form-control" cols="10" rows="8"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills<sup>*</sup></label>
          <input type="text" required name="skills" value={skills} onChange={(e) => handleChange(e)} className="form-control"
            placeholder="Enter a comma separated list. e.g: HTML, CSS, Python" />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="url" name="website" value={website} onChange={(e) => handleChange(e)} className="form-control" placeholder="Website" />
        </div>

        <div className="form-group">
          <label htmlFor="githubusername">Github username</label>
          <input type="text" name="githubusername" value={githubusername} onChange={(e) => handleChange(e)} className="form-control" placeholder="Github username" />
        </div>
        <div onClick={() => toggleSocialLinks(!socialLinks) }
          className='my-1'
          style={{ margin: 'auto'}}
        > Add social links </div>
        { socialLinks &&  (
        <Fragment>
        <div className="form-group">
          <label htmlFor="facebook">Facebook</label>
          <input type="url" name="facebook" value={facebook} onChange={(e) => handleChange(e)} className="form-control" placeholder="Facebook" />
        </div>

        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <input type="url" name="twitter" value={twitter} onChange={(e) => handleChange(e)} className="form-control" placeholder="Twitter" />
        </div>

        <div className="form-group">
          <label htmlFor="instagram">Instagram</label>
          <input type="url" name="instagram" value={instagram} onChange={(e) => handleChange(e)} className="form-control" placeholder="Instagram" />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input type="url" name="linkedin" value={linkedin} onChange={(e) => handleChange(e)} className="form-control" placeholder="LinkedIn" />
        </div>
      </Fragment>)}
        {/* <div className="form-group">
          <label htmlFor="youtube">Youtube</label>
          <input type="text" name="youtube" value={youtube} onChange={(e) => handleChange(e)} className="form-control" placeholder="Youtube" />
        </div> */}

        <button className="btn btn-primary" type="submit">Create Profile</button>
      </form>
    </Fragment>
  );
}
EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  currentProfile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentProfile: state.profile.currentProfile,
  loading: state.auth.loading
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));