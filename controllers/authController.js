const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const {  validationResult } = require('express-validator');

const User = require('../models/User');

const signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      errors: errors.array().map(err => err.msg)
    });
  }
  // Signup request passed all validations
  const { name, email, password } = req.body;

  // Check if User already exists
  User.findOne({email}, (err, user) => {
    if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to check existing user']});
    
    if (user) return res.status(401).json({ status: false, errors: ['Bad Request:: User account already exists'] });

    // User does not exist => create new user
    // set up gravata
    const avatar = gravatar.url(email, {s: '150', d: 'mm', r: 'pg'}, true);
    let newUser = new User({ name, email, password, avatar });
    // Hash password before save
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to generate salt'] });

      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to hash password'] })

        newUser.password = hash;

        newUser.save((err, userDoc) => {
          if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to save user to DB'] });

          // User saved to DB, send toke
          const payload = {id : userDoc._id };
          jwt.sign(
            payload, 
            process.env.JWT_SECRET_KEY,
            {expiresIn: 60 * 60 * 60}, // change this later
            (err, token) => {
              if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to generate token for user'] });

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

// 
const login = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      errors: errors.array().map(err => err.msg)
    });
  }
  // login request passed all validations
  const { email, password } = req.body;
 
  // Check if User already exists
  User.findOne({ email }, (err, user) => {
    if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to confirm user account'] });

    if (!user) return res.status(400).json({ status: false, errors: ['Email or Password is not valid'] });

    // User exist => compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: Failed to compare password'] });

      if (!isMatch) {
        return res.status(401).json({
          status: false,
          errors: ['Email or Password is not valid']
        });
      }

      // Password and Email matched
      // Get the token
      jwt.sign({
        id: user._id
      },
      process.env.JWT_SECRET_KEY,
        {
          expiresIn: 60 * 60 * 60
        },
        (err, token) => {
          if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: Failed to generate token'] });

          // token was found
          return res.status(200).json({
            status: true,
            message: 'User login successful',
            token
          });
        });
    });
   

  });
};


module.exports = {signup, login};