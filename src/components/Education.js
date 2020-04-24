import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEducation } from '../actions/profileActions';
const Education = ({ educations, deleteEducation }) => {

  const deleteEducationById = (id) => {
    if (window.confirm('Are you sure, this is irreversibel!!')) {
      deleteEducation(id)
    }
  }
  const renderEducation =  educations.map(education => (
    <tr key={`Education-${education._id}`}>
      <td>{ education.school} </td>
  <td className="hide-sm">{ `${education.from} - ${education.to}` }</td>
      <td>{`${education.degree}, ${education.fieldofstudy}`}</td>
      <td> <span onClick={() => deleteEducationById(education._id)} className="btn btn-danger">DELETE</span></td>
    </tr>
  ));
  return (
  <div className="manage-education">
      {/* <p className="text text-primary">Manage Education</p> */}
    <table className="table">
      <thead>
        <tr>
          <th>School</th>
          <th className="hide-sm">Year</th>
          <th>Degree</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { renderEducation }
      </tbody>

    </table>
  </div>

   );
}
 Education.propsTypes = {
   deleteEducation: PropTypes.func.isRequired
 };
export default connect(null, { deleteEducation })(Education);