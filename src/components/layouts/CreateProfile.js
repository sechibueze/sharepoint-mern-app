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
    youtube: ''
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
    githubusername, facebook, twitter, instagram, linkedin, youtube
   } = profileData;
  return (
    <Fragment>
      <h1> Craete profilee</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p className="text text-primary">Create your Profile</p>
        <Alert />
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select name="status" value={status} onChange={(e) => handleChange(e)} className="form-control">
            <option value="0">Select your status</option>
            <option value="educator">Educator</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" value={company}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Company" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" value={ location }  onChange={(e) => handleChange(e)} className="form-control" placeholder="Location" />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" value={bio}  placeholder="Bio" onChange={(e) => handleChange(e)} className="form-control" cols="10" rows="8"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input type="text" name="skills" value={skills}  onChange={(e) => handleChange(e)} className="form-control"
            placeholder="Enter a comma separated list. e.g: HTML, CSS, Python" />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="text" name="website" value={website}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Website" />
        </div>

        <div className="form-group">
          <label htmlFor="githubusername">Github username</label>
          <input type="text" name="githubusername" value={githubusername}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Github username" />
        </div>

        <div className="form-group">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" name="facebook" value={facebook}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Facebook" />
        </div>

        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" name="twitter" value={twitter}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Twitter" />
        </div>

        <div className="form-group">
          <label htmlFor="instagram">Instagram</label>
          <input type="text" name="instagram" value={instagram}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Instagram" />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input type="text" name="linkedin" value={linkedin}  onChange={(e) => handleChange(e)} className="form-control" placeholder="LinkedIn" />
        </div>

        <div className="form-group">
          <label htmlFor="youtube">Youtube</label>
          <input type="text" name="youtube" value={youtube}  onChange={(e) => handleChange(e)} className="form-control" placeholder="Youtube" />
        </div>

        <button className="btn btn-primary" type="submit">Create Profile</button>


      </form>
    </Fragment>
  );
}
 CreateProfile.propTypes = {
   createProfile: PropTypes.func.isRequired
 };
export default connect(null, { createProfile })(withRouter(CreateProfile));