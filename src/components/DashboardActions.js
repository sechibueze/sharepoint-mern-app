import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
const DashboardActions = () => {
  return ( 
    <Fragment>
      <div className="dashboard-navigation">
        <Link to='/manage-posts' className='fa fa-comments'> {' '} Manage Posts</Link>
        <Link to='/edit-profile' className='fa fa-user-plus'>{' '}Edit Profile</Link>
        <Link to='/add-education' className='fa fa-graduation-cap'>{' '}Add Education </Link>
        <Link to='/add-experience' className='fa fa-black-tie'>{' '}Add Experience</Link>    
      </div>
    </Fragment>
  );
}
 
export default DashboardActions;