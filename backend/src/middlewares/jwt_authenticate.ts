// jwt_authenticate.ts
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/userSchema';
import express from 'express';

// The jwt_Authenticate function is a middleware that authenticates requests using JSON Web Tokens (JWT)
const jwt_Authenticate = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    // Retrieve the JWT from the cookies sent with the request
    const token = req.cookies.jwtoken;

    // Check if process.env.JWT_KEY has a value
    if (process.env.JWT_KEY) {
      // Verify the JWT using the secret key
      const verifyToken = jwt.verify(token, process.env.JWT_KEY);

      // Check if verifyToken is an object and has the _id property
      if (typeof verifyToken === 'object' && '_id' in verifyToken) {
        // Narrow down the type of verifyToken to JwtPayload
        const payload = verifyToken as JwtPayload;

        // Find a user in the database with the same _id as in the verified JWT and with a matching token
        const rootUser = await User.findOne({
          _id: payload._id,
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
      } else {
        // Handle the case where verifyToken is not a valid JwtPayload
        console.error('Invalid JWT payload');
      }
    } else {
      // Handle the case where process.env.JWT_KEY is undefined
      console.error('No secret key provided in process.env.JWT_KEY');
    }
  } catch (err) {
    console.error(err);
    // If there is an error, respond with a 400 status code and an error message
    res.status(400).send('Unauthorised:_NO_token_provided');
  }
};

export default jwt_Authenticate;
