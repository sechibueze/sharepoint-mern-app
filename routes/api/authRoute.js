const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signup, login, getUserByToken } = require('../../controllers/authController');
const checkAuth= require('../../middlewares/checkAuth');
/****
 * @route POST /api/signup
 * @description User signup
 * @access public
 */
router.post('/signup', 
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Password is not acceptable').isLength({ min: 5 })]
, signup);


/****
 * @route POST /api/login
 * @description User login
 * @access public
 */
router.post('/login',
  [
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Password is not acceptable').isLength({ min: 5 })]
  , login);

/****
* @route GET /api/auth
* @description get user by token
* @access private
*/
router.get('/auth', checkAuth, getUserByToken);


module.exports = router;