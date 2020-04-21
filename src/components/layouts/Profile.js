import React, { Fragment} from 'react';
const Profile = (props) => {
  
  return (
    <Fragment>
      <h1> Profiles for { props.match.params.id}</h1>
      <div className="member-profile">
        <div className="profile-header mb-1">
          <img src="%PUBLIC_URL%/img/1_9kiIj-ZaWItE0sIMBRdlDg.jpeg" alt='profile of professional' style={{ width: '90px', height: '90px', borderRadius: '50%' }}/>
          <h1 className="text text-primary"> Sara Smith</h1>
          <div className="connect-icons my-2">
            <link to="https://sechibueze.github.io"><span className="fa fa-globe"></span></link>
            <link to="https://facebook.com/sechibueze"><span className="fa fa-facebook"></span></link>
            <link to="https://twitter.com/sechibueze"><span className="fa fa-twitter"></span></link>
            <link to="https://instagram.com/sechibueze"><span className="fa fa-instagram"></span></link>
            <link to="https://linkedin.com/in/sechibueze"><span className="fa fa-linkedin"></span></link>
            <link to="https://youtube.com/sechibueze"><span className="fa fa-youtube"></span></link>
            
          </div>
        </div>

        <div className="skills-bio-wrapper">
          {/* <!-- Bio --> */}
        <div className="about">
            <h2 className="text text-primary"> Sara's Bio</h2>
            <article className="bio p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime illum necessitatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime illum necessitatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime illum necessitatibus.

          </article>
          </div>

          {/* <!-- Skillset --> */}
        <div className="skillset">
            <h2 className="text text-primary"> Sara's Skillset</h2>
            <div className="p-1">
              <p className=""> <span className="fa fa-check"></span> Communitication</p>
              <p className=""> <span className="fa fa-check"></span> Programming</p>
              <p className=""> <span className="fa fa-check"></span> Logistics</p>
            </div>
          </div>
        </div>

        <div className="edu-exp-wrapper">
          {/* <!-- education --> */}
        <div className="education">
            <h2 className="text text-primary"> Education</h2>
            {/* <!-- Edu 1 --> */}
          <div className="study mb-1">
              <h3 className="large"> <strong> University of Technology</strong></h3>
              <p> <strong> Degree : </strong> Masters</p>
              <p> <strong> Grad year : </strong> 2011</p>
              <p> <strong> Field of Study : </strong> Computer Science</p>
              <article className="description">
                <strong> Description : </strong>

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae inventore omnis quam, iure
              laudantium, distinctio praesentium necessitatibus repudiandae dolores voluptatem accusamus doloribus?
              Ullam
              consequuntur libero omnis enim, assumenda perspiciatis!
            </article>
            </div>

            {/* <!-- Edu 2 --> */}
          <div className="study mb-1">
              <h3 className="large"> <strong> University of Technology</strong></h3>
              <p> <strong> Degree : </strong> Masters</p>
              <p> <strong> Grad year : </strong> 2011</p>
              <p> <strong> Field of Study : </strong> Computer Science</p>
              <article className="description">
                <strong> Description : </strong>

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae inventore omnis quam, iure
              laudantium, distinctio praesentium necessitatibus repudiandae dolores voluptatem accusamus doloribus?
              Ullam
              consequuntur libero omnis enim, assumenda perspiciatis!
            </article>
            </div>

          </div>

          {/* <!-- Experience --> */}
        <div className="experience">
            <h2 className="text text-primary"> Experience</h2>
            {/* <!-- Work 1 --> */}
          <div className="work mb-1">
              <h3 className="large"> <strong> Andela </strong></h3>
              <p> <strong> Position : </strong> Developer</p>
              <p> <strong> Period : </strong> 2011</p>

              <article className="description">
                <strong> Description : </strong>

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae inventore omnis quam, iure
              laudantium, distinctio praesentium necessitatibus repudiandae dolores voluptatem accusamus doloribus?
              Ullam
              consequuntur libero omnis enim, assumenda perspiciatis!
            </article>
            </div>

            {/* <!-- work 2 --> */}
          <div className="work mb-1">
              <h3> <strong> Andela </strong></h3>
              <p> <strong> Position : </strong> Developer</p>
              <p> <strong> Period : </strong> 2011</p>

              <article className="description">
                <strong> Description : </strong>

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae inventore omnis quam, iure
              laudantium, distinctio praesentium necessitatibus repudiandae dolores voluptatem accusamus doloribus?
              Ullam
              consequuntur libero omnis enim, assumenda perspiciatis!
            </article>
            </div>

          </div>
        </div>


      </div>

    </Fragment>
  );
}
 
export default Profile;