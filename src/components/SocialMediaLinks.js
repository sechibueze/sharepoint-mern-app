import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SocialMediaLinks = ({ socialMediaLinks }) => {
  const { 
    facebook,
    twitter,
    instagram,
    linkedin
  } = socialMediaLinks;
  return (
    <Fragment>
      {facebook && <Link to={facebook} className="fa fa-facebook"/>}
      {twitter && <Link to={twitter} className="fa fa-twitter" />}
      {instagram && <Link to={instagram} className="fa fa-instagram" />}
      {linkedin && <Link to={linkedin} className="fa fa-linkedin" />}
    </Fragment>
  );
}
 
export default SocialMediaLinks;