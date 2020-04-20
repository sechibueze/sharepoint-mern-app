import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const ProfileCard = () => {
  return (
    <Fragment>
     
      <div className="profile p-2">
        <div className="profile-image p-1">
          <img src="./img/1_9kiIj-ZaWItE0sIMBRdlDg.jpeg" alt='person professional' style={{width: '90px', height: '90px', borderRadius: '50%'}} />

        </div>
        <div className="profile-info p-1">
          <h2 className="info"> Abraham Linkon</h2>
          <p className=""> President at United Corporations</p>
          <p className="mb-1"> New Dehli, India</p>
          <Link to={`/profiles/123`} className="btn btn-primary btn-sm my-1"> View Profile</Link>
        </div>
        <div className="skills p-1">
          <p> <span className="fa fa-check"></span> Literacy </p>
          <p className="py-1"> <span className="fa fa-check"></span> Literacy </p>
          <p> <span className="fa fa-check"></span> Literacy </p>
        </div>
      </div>
    </Fragment>
  );
}
 
export default ProfileCard;