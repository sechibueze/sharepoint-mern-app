import React, { Fragment } from 'react';
const Skillset = ({ skills}) => {
  return ( 
     <Fragment>
      {skills.map((skill, index) => (
        <p className="py-1" key={`skill-${index}`}> <span className="fa fa-check"></span> {skill} </p>
      ))
      }
     </Fragment>
   );
}
 
export default Skillset;