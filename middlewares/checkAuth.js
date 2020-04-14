const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
 
    // Get token from header
   const token = req.headers['x-auth-token'];
 
   if (!token) {
     return res.status(401).json({
       status: false,
       errors: ['Auth Failed:: No token in header']
     });
   }

  //  There is token, verify
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: false,
        errors: ['Auth Failed:: Invalid token']
      });
    }

    // token was valid
    req.currentUserId = decoded.id;
    next();
  });
 
}

module.exports = checkAuth;