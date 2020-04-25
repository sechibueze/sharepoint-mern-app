import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';


const AddExperience = ({ addExperience, history }) => {

const [currentExperience, setCurrentExperience] = useState(false);
  const [experience, setExperience] = useState({
    title: '',
    company: '',
    location: '',
    current: currentExperience,
    from: '',
    to: '',
    description: ''
  });


  const handleChange = ({ target: { name, value } }) => {
    setExperience({
      ...experience,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault(); 
    addExperience(experience, history);
  };

  const { company, location, title, from, to, description } = experience;
  return (
    <Fragment>

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p className="text text-primary">Add Experience</p>
        <sup>*</sup>Required
        <div className="form-group">
          <label htmlFor="company">Company<sup>*</sup></label>
          <input type="text" value={company} required onChange={(e) => handleChange(e)} name="company" className="form-control" placeholder="Company or Organization" />
        </div>

        <div className="form-group">
          <label htmlFor="title"><sup>*</sup>Title</label>
          <input type="text" required value={title} onChange={(e) => handleChange(e)} name="title" className="form-control" placeholder="What role did you play ?" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location<sup>*</sup></label>
          <input type="text" value={location} 
          onChange={(e) => handleChange(e)} name="location" required
          className="form-control" placeholder="City, State" />
        </div>

        <div className="form-group">
          <label htmlFor="from">From<sup>*</sup></label>
          <input type="date"  value={from} onChange={(e) => handleChange(e)} name="from" className="form-control" placeholder="When did you start?" />
        </div>

        <div className="form-group">
          <span >

            <input
              type="checkbox" checked={currentExperience}
              name="current"
              value={currentExperience}
              onChange={(e) => {
                setExperience({
                  ...experience,
                  current: !currentExperience
                });
                setCurrentExperience(!currentExperience);
              }} />
            {` Current`}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="date" name="to"
            value={to}
            disabled={currentExperience === true ? 'disabled' : ''}
            onChange={(e) =>handleChange(e)}
            className="form-control" placeholder="When did you leave, if so?" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={description} onChange={(e) => handleChange(e)} placeholder="Share you moments and roles with the community" className="form-control" cols="10" rows="8" />
        </div>

        <button className="btn btn-primary" type="submit">Add Experience</button>
      </form>
    </Fragment>
  );
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};
export default connect(null, { addExperience })(withRouter(AddExperience));