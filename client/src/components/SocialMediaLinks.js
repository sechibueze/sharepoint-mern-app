import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

const SocialMediaLinks = ({ socialMediaLinks }) => {
  const { 
    facebook,
    twitter,
    instagram,
    linkedin
  } = socialMediaLinks;
  return (
    <Fragment>
      
      {facebook && <a href={ facebook } rel='noopener noreferrer' target='_blank'><span className="fa fa-facebook" /></a>}
      {twitter && <a href={twitter} rel='noopener noreferrer' target='_blank'><span className="fa fa-twitter" /></a>}
      {instagram && <a href={instagram} rel='noopener noreferrer' target='_blank'><span className="fa fa-instagram" /></a>}
      {linkedin && <a href={linkedin} rel='noopener noreferrer' target='_blank'><span className="fa fa-linkedin" /></a>}
    </Fragment>
  );
}
 
export default SocialMediaLinks;