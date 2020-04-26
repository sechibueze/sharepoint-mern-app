const { validationResult } = require('express-validator');
const Profile = require('../models/Profile');
const User = require('../models/User');


/*** Create or Update User profile */
const updateProfileController = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      errors: errors.array().map(e => e.msg)
    })
  }
  // All validations have passed
  // Retrieve data from request body
  const {
    bio,
    company,
    location,
    website,
    githubusername,
    status,
    skills,
    // social data
    facebook,
    twitter,
    linkedin,
    instagram
  } = req.body;
//  Create/iinitialize a copy of profileFields
let profileFields = {};
profileFields.socials = {};
  profileFields.user = req.currentUserId
  if (bio) profileFields.bio = bio;
  if (company) profileFields.company = company;
  if (location) profileFields.location = location;
  if (website) profileFields.website = website;
  if (githubusername) profileFields.githubusername = githubusername;
  if (status) profileFields.status = status;
  if (skills) profileFields.skills = Array.isArray(skills) ? skills : skills.split(',').map(skill => ' ' + skill.trim());
  // Social media links :// Use normalize for urls
  if (facebook) profileFields.socials.facebook = facebook;
  if (twitter) profileFields.socials.twitter = twitter;
  if (linkedin) profileFields.socials.linkedin = linkedin;
  if (instagram) profileFields.socials.instagram = instagram;

  // Update or Create a new profile data
  Profile.findOneAndUpdate(
    { user: req.currentUserId},
    {$set: profileFields},
    {new: true, upsert: true},
    (err, newProfile) => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to create/update user profile'] });

      // Profile Updated
      return res.json({
        status: true,
        message: 'Current user profile details',
        data: newProfile
      })
    });
}

/*** Get User profile */
const getCurrentUserProfile = (req, res) => {
  const currentUserId = req.currentUserId
  Profile.findOne(
    { user: currentUserId}).
    populate({
      path: 'user',
      select: ['name', 'email', 'avatar'] ,
      model: User // exported in model
    })
    .exec( 
    (err, currentUserProfile) => {
       
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get current user profile'] });

      // if (!currentUserProfile) return res.status(400).json({ status: false, errors: ['Internal Server Error:: No known/associated user profile found'] });

      // currentUserProfile exist

      return res.status(200).json({
        status: false,
        message: 'Current user profile',
        data: currentUserProfile
      });

    });
}
/*** Get profile details by user id*/
const getProfileByUserId = (req, res) => {
  const { user_id } = req.params;

  Profile.findOne(
    { user: user_id }).
    populate({
      path: 'user',
      select: ['name', 'email', 'avatar'],
      model: User // exported in model
    })
    .exec(
      (err, userProfile) => {

        if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get ser profile'] });

        if (!userProfile) return res.status(400).json({ status: false, errors: ['Internal Server Error:: No known/associated user profile found'] });

        // requested userProfile exist

        return res.status(200).json({
          status: false,
          message: 'User profile',
          data: userProfile
        });

      });
}

/**** Get ALL profiles */
const getAllUserProfiles = (req, res) => {
  Profile.find().populate({
    path: 'user',
    select: ['name', 'email', 'avatar'],
    model: User
  }).exec().then((Profiles) => {
  
    return res.status(200).json({
      status: false,
      message: 'All user profiles',
      data: Profiles
    });

  }).catch(err => {
    return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get all profiles'] });

  });
}

/**** Delete user Profile, Post & User account */
const deleteCurrentUserProfile = async (req, res) => {
  const currentUserId = req.currentUserId;
  try {
    await Profile.deleteOne({ user: currentUserId });
    await User.deleteOne({ _id: currentUserId});
    // await Post.deleteMany({ creator: currentUserId});

    return res.status(200).json({
      status: true,
      message: 'Record successfully deleted'
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      errors: [err.message]
    });
  }
}

/*****UPDATE Education field in Profile */
const updateProfileEducation = ( req, res) => {
  const currentUserId = req.currentUserId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      errors: errors.array().map(e => e.msg)
    })
  }
  // Get Request data
  const {
    school,
    degree,
    fieldofstudy,
    from,
    // optional
    to,
    description,
    current
  } = req.body;

  // Initialize Education data
  let newEducation = {
    school,
    degree,
    fieldofstudy,
    from
  }

  if (to) newEducation.to = to;
  if (description) newEducation.description = description;
  if (current) newEducation.current = current;

  // Find and update education field
  Profile.findOne({ user: currentUserId }, (err, foundProfile) => {
    if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get profile for update'] });

    if (!foundProfile) return res.status(401).json({ status: false, errors: ['Bad Request: No matchin profile'] });
    
    // found profile
    foundProfile.education.unshift(newEducation);

    foundProfile.save(err => {
   
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to save updated profile'] });

      return res.status(200).json({
        status: false,
        message: 'User Education data updated',
        data: foundProfile
      });
    });
    
  });
}

/*****UPDATE Experiences field in Profile */
const updateProfileExperience = (req, res) => {
  const currentUserId = req.currentUserId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      errors: errors.array().map(e => e.msg)
    })
  }
  // Get Request data
  const {
    title,
    company,
    location,
    from,
    // optional
    to,
    description,
    current
  } = req.body;

  // Initialize Exprience data
  let newExperience = {
    title,
    company,
    location,
    from
  }

  if (to) newExperience.to = to;
  if (description) newExperience.description = description;
  if (current) newExperience.current = current;

  // Find and update education field
  Profile.findOne({ user: currentUserId }, (err, foundProfile) => {
    if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get profile for update'] });

    if (!foundProfile) return res.status(401).json({ status: false, errors: ['Bad Request: No matchin profile'] });
   
    // found profile
    foundProfile.experience.unshift(newExperience);

    foundProfile.save(err => {
      
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to save updated profile'] });

      return res.status(200).json({
        status: false,
        message: 'User Experience data updated',
        data: foundProfile
      });
    });

  });
}

/*** Delete profile Education */
const deleteProfileEducationById = (req, res) => {
  const currentUserId = req.currentUserId;
  const { edu_id } = req.params;
  
  // Find auser profile record
  Profile.findOne({ user: currentUserId }, (err, foundProfile) => {
    if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get profile for update'] });

    if (!foundProfile) return res.status(401).json({ status: false, errors: ['Bad Request: No matchin profile'] });

    // found profile

    foundProfile.education = foundProfile.education.filter(eds => eds._id.toString() !== edu_id);


    // foundProfile.education = currentEds;

    foundProfile.save(err => {

      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to save updated profile'] });

      return res.status(200).json({
        status: false,
        message: 'User Education data deleted',
        data: foundProfile
      });
    });

  });
}
/**** UPDATE profile Experience */
const deleteProfileExperienceById = (req, res) => {
  const currentUserId = req.currentUserId;
  const { exp_id } = req.params;

  // Find user profile record
  Profile.findOne({ user: currentUserId }, (err, foundProfile) => {
    if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get profile for update'] });

    if (!foundProfile) return res.status(401).json({ status: false, errors: ['Bad Request: No matching profile'] });

    // found profile

    foundProfile.experience = foundProfile.experience.filter(exp => exp._id.toString() !== exp_id);
    

    // foundProfile.education = currentEds;

    foundProfile.save(err => {

      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to save updated profile'] });

      return res.status(200).json({
        status: false,
        message: 'User Experience data deleted',
        data: foundProfile
      });
    });

  });
}
module.exports = { 
  updateProfileController, 
  getCurrentUserProfile,
  getAllUserProfiles,
  getProfileByUserId ,
  deleteCurrentUserProfile,
  updateProfileEducation,
  updateProfileExperience,
  deleteProfileEducationById,
  deleteProfileExperienceById
}