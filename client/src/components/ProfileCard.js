import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Skillset from './Skillset';
const ProfileCard = ({ profile }) => {
  const {status, company, location, skills, user: { _id, name, avatar } } = profile;
  return (
    <Fragment>
   
      <div className="profile p-2">
        <div className="profile-image p-1">
          <img src={avatar} alt={`${name}-profile`} style={{width: '90px', height: '90px', borderRadius: '50%'}} />

        </div>
        <div className="profile-info p-1">
          <h2 className="info"> { name } </h2>
          <p className="my-1"> {`${ status } at ${ company }`} </p>
          <p className="mb-1"> { location } </p>
          <Link to={`/profiles/${_id}`} className="btn btn-primary btn-sm my-1"> View Profile</Link>
        </div>
        <div className="skills p-1">
          <h3> Skillset </h3>
          <Skillset skills={ skills } count={3} />    
        </div>
      </div>
    </Fragment>
  );
}
 
export default ProfileCard;