import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';
const AddEducation = ({ addEducation, history }) => {
  

  const [ education, setEducation] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    current: '',
    from: '',
    to: '',
    description: ''
  });

  const handleChange = ({ target: {name, value}}) => {
    setEducation({
      ...education,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addEducation(education, history);
  };

  const { school, degree, fieldofstudy, from, current, to, description } = education;
  return (
    <Fragment>
    
      <form className="form" onSubmit={(e) => handleSubmit(e) }>
        <p className="text text-primary">Add Education</p>
        <sup>*</sup> Required
        <div className="form-group">
          <label htmlFor="school">School<sup>*</sup></label>
          <input type="text" required value={school} onChange={(e) => handleChange(e)} name="school" className="form-control" placeholder="School or programme attended" />
        </div>
        
        <div className="form-group">
          <label htmlFor="degree">Degree<sup>*</sup></label>
          <input type="text" required value={degree} onChange={(e) => handleChange(e)}  name="degree" className="form-control" placeholder="Degree obtained" />
        </div>

        <div className="form-group">
          <label htmlFor="fieldofstudy">Field of Study<sup>*</sup></label>
          <input type="text" required value={fieldofstudy} onChange={(e) => handleChange(e)}  name="fieldofstudy" className="form-control" placeholder="Field or course of study" />
        </div>

        <div className="form-group">
          <label htmlFor="from">From<sup>*</sup></label>
          <input type="date" required value={from} onChange={(e) => handleChange(e)}  name="from" className="form-control" placeholder="When did you start the programme" />
        </div>

        <div className="form-group">
          <span >
            
            <input 
              type="checkbox" checked={ current ? true : false } 
              name="current" 
              value={current}
              onChange={(e) => {
                setEducation({
                  ...education,
                  current: e.target.checked
                });
               
              }}/>
            {` Current`} 
          </span>    
        </div>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="date" name="to" 
          value={to}
            disabled={current === true ? 'disabled' : ''} 
            onChange={(e) => handleChange(e)}
          className="form-control" placeholder="WHen did you complete the programme" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={description} onChange={(e) => handleChange(e)}  placeholder="Share your experience from the programme" className="form-control" cols="10" rows="8" />
        </div> 

        <button className="btn btn-primary" type="submit">Add Education</button>
      </form>
    </Fragment>
  );
}
 
AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};
export default connect(null, { addEducation })(withRouter(AddEducation));