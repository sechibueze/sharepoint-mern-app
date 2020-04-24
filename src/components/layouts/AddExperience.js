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

    // console.log('Add ed data::', experience)
    addExperience(experience, history);
  };

  const { company, location, title, from, to, description } = experience;
  return (
    <Fragment>

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p className="text text-primary">Add Experience</p>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" value={company} onChange={(e) => handleChange(e)} name="company" className="form-control" placeholder="Company" />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={(e) => handleChange(e)} name="title" className="form-control" placeholder="Title" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" value={location} 
          onChange={(e) => handleChange(e)} name="location" 
          className="form-control" placeholder="Location" />
        </div>

        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" value={from} onChange={(e) => handleChange(e)} name="from" className="form-control" placeholder="From" />
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
          <input type="text" name="to"
            value={to}
            disabled={currentExperience === true ? 'disabled' : ''}
            onChange={
              (e) => {
                handleChange(e);
                // setCurrentEducation(!currentEducation);
              }
            }
            className="form-control" placeholder="To" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={description} onChange={(e) => handleChange(e)} placeholder="Description" className="form-control" cols="10" rows="8" />
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