import React from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExperience } from '../actions/profileActions';
const Experience = ({ experiences, deleteExperience }) => {
  const deleteExperineceById = (id) => {
    if (window.confirm('Are you sure? This is irreverible!')) {
      deleteExperience(id);
    }
  }
  const renderExperience = experiences.map(experience => (
    
    <tr key={`experience-${experience._id}`}>
      <td> {experience.company} </td>
      <td> {experience.title } </td>
      <td className="hide-sm">  {experience.location} </td>
      <td className="hide-sm"> 
        {`${experience.from} - ${experience.current ? 'Now' : experience.to }`}
        </td>
      <td> <span onClick={() => deleteExperineceById(experience._id)} className="btn btn-danger">DELETE</span></td>
    </tr>
  ));
  return (
    <div className="manage-experience">
        {/* <p className="text text-primary">Manage Experience</p> */}
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position </th>
            <th className="hide-sm">Location </th>
              <th className="hide-sm"> Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { renderExperience }
            
          </tbody>

        </table> 
      </div>
  );
}
 Experience.propTypes = {
   deleteExperience: PropTypes.func.isRequired
 };
export default connect(null, { deleteExperience })(Experience);