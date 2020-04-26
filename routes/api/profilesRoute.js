const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const checkAuth = require('../../middlewares/checkAuth');
const { updateProfileController, 
  getCurrentUserProfile,
  getAllUserProfiles,
  getProfileByUserId,
  deleteCurrentUserProfile,
  updateProfileEducation,
  updateProfileExperience,
  deleteProfileEducationById,
  deleteProfileExperienceById
 } = require('../../controllers/profileController');
/****
 * @route POST /api/profiles
 * @description User create & update profile
 * @access private
 */
router.post('/', 
checkAuth,
  [
    check('status', 'status is not valid').not().isEmpty(), 
    check('skills', 'skill is not valid').notEmpty()
  ] 
, updateProfileController);

/****
 * @route GET /api/profiles
 * @description Get ALL user profiles
 * @access public
 */
router.get('/',  getAllUserProfiles);

/****
 * @route GET /api/profiles/me
 * @description Get current user profile details
 * @access private
 */
router.get('/me', checkAuth, getCurrentUserProfile);

/****
 * @route GET /api/profiles/users/:user_id
 * @description Get profile by user_id
 * @access public
 */
router.get('/users/:user_id', getProfileByUserId);

/****
 * @route DELETE /api/profiles
 * @description Delete User, Profile, Posts
 * @access private
 */
router.delete('/', checkAuth, deleteCurrentUserProfile);

/****
 * @route PUT /api/profiles/education
 * @description Update Education field in Profile data
 * @access private
 */
router.put('/education', checkAuth, 
  [
    check('school', 'school field is required').not().isEmpty(),
    check('degree', 'degree field is required').not().isEmpty(),
    check('fieldofstudy', 'field of study field is required').not().isEmpty(),
  
    check('from', 'From field is required').not().isEmpty()
  ],
  updateProfileEducation);

/****
 * @route PUT /api/profiles/experience
 * @description Update Experience field in Profile data
 * @access private
 */
router.put('/experience', checkAuth, 
  [
    check('title', 'Title field is required').not().isEmpty(),
    check('company', 'Company field is required').not().isEmpty(),
    check('location', 'Location field is required').not().isEmpty(),
    check('from', 'From field is required').not().isEmpty()
  ],
  updateProfileExperience);

/****
* @route DELETE /api/profiles/experience/:exp_id
* @description DELETE Experience field in Profile data
* @access private
*/
router.delete('/experience/:exp_id', checkAuth, deleteProfileExperienceById);


/****
* @route DELETE /api/profiles/education/:edu_id
* @description DELETE Education field in Profile data
* @access private
*/
router.delete('/education/:edu_id', checkAuth, deleteProfileEducationById);

module.exports = router;