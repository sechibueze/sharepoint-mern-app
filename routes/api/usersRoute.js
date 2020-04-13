const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signup, signupValidations } = require('../../controllers/usersController');
/****
 * @route POST /api/users
 * @description User signup
 * @access public
 */
router.post('/', 
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Password is not acceptable').isLength({ min: 5 })]
, signup);

module.exports = router;