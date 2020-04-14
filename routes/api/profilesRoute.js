const express = require('express');
const router = express.Router();
const checkAuth = require('../../middlewares/checkAuth');

/****
 * @route POST /api/profiles
 * @description User create & update profile
 * @access private
 */
router.post('/', checkAuth, (req, res) => {
  res.status(200).json({ 
    message: 'Profiles',
    userId: req.currentUserId
 });
});

module.exports = router;