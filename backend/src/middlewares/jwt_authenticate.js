const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

// The jwt_Authenticate function is a middleware that authenticates requests using JSON Web Tokens (JWT)
const jwt_Authenticate = async (req, res, next) => {
  try {
    // Retrieve the JWT from the cookies sent with the request
    const token = req.cookies.jwtoken;

    // Verify the JWT using the secret key
    const verifyToken = jwt.verify(token, process.env.JWT_KEY);

    // Find a user in the database with the same _id as in the verified JWT and with a matching token
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      'tokens.token': token,
    });

    // If no user is found, throw an error
    if (!rootUser) {
      throw new Error('User not found');
    }

    // If a user is found, add the token, rootUser, and userID to the request object.
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    // If there is an error, respond with a 400 status code and an error message
    res.status(400).send('Unauthorised:_NO_token_provided');
  }
};

module.exports = jwt_Authenticate;
