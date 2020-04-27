import React, { Fragment } from 'react';
const Skillset = ({ skills, count}) => {
  const end = !count ? skills.length : count;
  return ( 
     <Fragment>
      {skills.slice(0, end ).map((skill, index) => (
        <p className="py-1" key={`skill-${index}`}> <span className="fa fa-check"></span> {skill} </p>
      ))
      }
     </Fragment>
   );
}
 
export default Skillset;