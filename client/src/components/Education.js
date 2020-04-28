import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteEducation } from '../actions/profileActions';
const Education = ({ educations, deleteEducation, canManageEducation  }) => {

  const deleteEducationById = (id) => {
    if (window.confirm('Are you sure, this is irreversibel!!')) {
      deleteEducation(id)
    }
  }
  if (educations.length < 1) {
    return (
      <Fragment>
        <h2 className='mb-2'> No education info provided</h2>
        {/* <Link className='btn btn-primary' to='/add-education'> Add Education </Link> */}
      </Fragment>
    )
  }
  const renderEducation =  educations.map(education => (
    <tr key={`Education-${education._id}`}>
      <td>{ education.school} </td>
      <td className="hide-sm">
        <Moment format='DD/MM/YYYY'>{ education.from }</Moment>
        {' - '}
        {education.current ? 'Now' : (<Moment format='DD/MM/YYYY'>{education.to}</Moment>) }
      </td>
      <td>{`${education.degree}, ${education.fieldofstudy}`}</td>
      
      {canManageEducation ? (
        <td> <span onClick={() => deleteEducationById(education._id)} className="btn btn-danger">DELETE</span></td>
      ) : null }
    </tr>
  ));
  return (
  <div className="manage-education my-1">
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

 
export default connect(null , { deleteEducation })(Education);