import React, { Fragment} from 'react';
import ProfileCard from '../ProfileCard';
const ProfileList = (props) => {
  const profileList = [1, 2];
  console.log('props list', props)
  return (
    <Fragment>
      <div className="profile-listing">
        <div className="intro">
          <h1 className="text text-primary">Educators</h1>
          <p className="">Browse and connect with Educators</p>
        </div>

        {profileList.map(id => <ProfileCard key={id} />) }

      </div>
    </Fragment>
  );
}
 
export default ProfileList;