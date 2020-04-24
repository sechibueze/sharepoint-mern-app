import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
const DashboardActions = () => {
  return ( 
    <Fragment>
      <div className="dashboard-navigation">
        <Link to='/edit-profile'>Edit Profile</Link>
        <Link to='/add-education'>Add Education </Link>
        <Link to='/add-experience'>Add Experienc</Link>
        <Link to='/create-profile'>Create Profile</Link>
      </div>
    </Fragment>
  );
}
 
export default DashboardActions;