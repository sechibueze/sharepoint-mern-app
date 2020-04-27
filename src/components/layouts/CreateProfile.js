import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { createProfile } from '../../actions/profileActions';
const CreateProfile = ({ createProfile, history }) => {
  const [profileData, setProfileData] = useState({
    status: '',
    company: '',
    location: '',
    bio: '',
    skills: '',
    website: '',
    githubusername: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    // youtube: ''
  });

  // handle onChange
  const handleChange = ({target}) => {
    setProfileData({
      ...profileData,
      [target.name]: target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createProfile(profileData, history );
  };

  const { 
    status, company, location, bio, skills, website,
    githubusername, facebook, twitter, instagram, linkedin, 
   } = profileData;
  return (
    <Fragment>
     
      <form className="form" onSubmit={handleSubmit}>
        <p className="text text-primary">Create your Profile</p>
        <sup>*</sup>Required
        <Alert />
        <div className="form-group">
          <label htmlFor="status">Status<sup>*</sup></label>
          <select name="status" value={status} onChange={(e) => handleChange(e)} className="form-control">
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
          <input type="text" name="company" required value={company}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Company" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location<sup>*</sup></label>
          <input type="text" required name="location" value={ location }  onChange={(e) => handleChange(e)} className="form-control" placeholder="Location" />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" value={bio}  placeholder="Say something about yourself" onChange={(e) => handleChange(e)} className="form-control" cols="10" rows="8"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills<sup>*</sup></label>
          <input type="text" required name="skills" value={skills}  onChange={(e) => handleChange(e)} className="form-control"
            placeholder="Enter a comma separated list. e.g: HTML, CSS, Python" />
          <small>Enter a comma separated list. e.g: HTML, Public Speeking, Python</small>
        </div>

        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="text" name="website" value={website}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Website" />
        </div>

        <div className="form-group">
          <label htmlFor="githubusername">Github username</label>
          <input type="text" name="githubusername" value={githubusername}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Github username" />
          <small> https://github.com/<i>username</i>, enter <b>username</b></small>
        </div>

        <div className="form-group">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" name="facebook" value={facebook}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Facebook Profile URL" />
          <small>Enter the link to your Facebook profile: https://facebook.com/username</small>
        </div>

        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" name="twitter" value={twitter}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Twitter profile link" />
          <small> Something like:  https://twitter.com/<i>username</i></small>
        </div>

        <div className="form-group">
          <label htmlFor="instagram">Instagram</label>
          <input type="text" name="instagram" value={instagram}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Instagram profile link" />
          <small> Something like:  https://instagram.com/<i>username</i></small>
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input type="text" name="linkedin" value={linkedin}  onChange={(e) => handleChange(e)} className="form-control" placeholder="LinkedIn profile URL" />
          <small> Something like:  https://linkedin.com/in/<i>username</i></small>
        </div>

        {/* <div className="form-group">
          <label htmlFor="youtube">Youtube</label>
          <input type="text" name="youtube" value={youtube}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Youtube" />
        </div> */}

        <button className="btn btn-primary" type="submit">Create Profile</button>


      </form>
    </Fragment>
  );
}
 CreateProfile.propTypes = {
   createProfile: PropTypes.func.isRequired
 };
export default connect(null, { createProfile })(withRouter(CreateProfile));