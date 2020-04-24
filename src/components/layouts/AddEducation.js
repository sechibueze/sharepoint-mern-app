import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';
const AddEducation = ({ addEducation, history }) => {
  const [currentEducation, setCurrentEducation] = useState(false);

  const [ education, setEducation] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    current: currentEducation,
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
    
    // console.log('Add ed data::', education)
    addEducation(education, history);
  };

  const { school, degree, fieldofstudy, from, to, description } = education;
  return (
    <Fragment>
    
      <form className="form" onSubmit={(e) => handleSubmit(e) }>
        <p className="text text-primary">Add Education</p>
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input type="text" value={school} onChange={(e) => handleChange(e)} name="school" className="form-control" placeholder="School attended" />
        </div>
        
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <input type="text" value={degree} onChange={(e) => handleChange(e)}  name="degree" className="form-control" placeholder="Degree" />
        </div>

        <div className="form-group">
          <label htmlFor="fieldofstudy">Field of Study</label>
          <input type="text" value={fieldofstudy} onChange={(e) => handleChange(e)}  name="fieldofstudy" className="form-control" placeholder="Field of study" />
        </div>

        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" value={from} onChange={(e) => handleChange(e)}  name="from" className="form-control" placeholder="From" />
        </div>

        <div className="form-group">
          <span >
            
            <input 
              type="checkbox" checked={currentEducation} 
              name="current" 
              value={currentEducation}
              onChange={(e) => {
                setEducation({
                  ...education,
                  current: !currentEducation
                });
                setCurrentEducation(!currentEducation);
              }}/>
            {` Current`} 
          </span>    
        </div>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="text" name="to" 
          value={to}
            disabled={currentEducation === true ? 'disabled' : ''} 
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
          <textarea name="description" value={description} onChange={(e) => handleChange(e)}  placeholder="Description" className="form-control" cols="10" rows="8" />
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