const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {  validationResult } = require('express-validator');

const User = require('../models/User');
const signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      error: errors.array().map(err => err.msg)
    });
  }
  // Signup request passed all validations
  const { name, email, password } = req.body;

  // Check if User already exists
  User.findOne({email}, (err, user) => {
    if (err) return res.status(500).json({ status: false, error: ['Internal Server Error:: failed to check existing user']});
    
    if (user) return res.status(401).json({ status: false, error: ['Bad Request:: User account already exists'] });

    // User does not exist => create new user
    let newUser = new User({ name, email, password });
    // Hash password before save
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json({ status: false, error: ['Internal Server Error:: failed to generate salt'] });

      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return res.status(500).json({ status: false, error: ['Internal Server Error:: failed to hash password'] })

        newUser.password = hash;

        newUser.save((err, userDoc) => {
          if (err) return res.status(500).json({ status: false, error: ['Internal Server Error:: failed to save user to DB'] });

          // User saved to DB, send toke
          const payload = {id : userDoc._id };
          jwt.sign(
            payload, 
            process.env.JWT_SECRET_KEY,
            {expiresIn: 60 * 60 * 60}, // change this later
            (err, token) => {
              if (err) return res.status(500).json({ status: false, error: ['Internal Server Error:: failed to generate token for user'] });

              return res.status(201).json({
                status: true,
                message: 'User signup successful',
                token
              });
            });
        });

      });

    });
  });
};

module.exports = {signup};