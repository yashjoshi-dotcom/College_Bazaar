// Importing required libraries
import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema';

// Using Express Router Class
const router = express.Router();

// The below mentioned function is responisble for allow ing users to log in.
router.post('/', async (req: express.Request, res: express.Response) => {
  try {
    const { email_id, password } = req.body;
    // Checking if both email id and password is entered
    if (!email_id || !password) {
      return res.status(400).json({ error: 'incomplete Data' });
    }
    // Checking if Email Id exists and if not request registering as a new account
    const userLogin = await User.findOne({ email_id });
    // Check if userLogin is not null
    if (userLogin) {
      // Comparing the entered password with the one present in dB
      const isMatched = await bcrypt.compare(password, userLogin.password);
      // Generatig JWT authentication token
      const token = await userLogin.generateAuthToken();
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000), // The cookie will expire in 30 days from the date the user had logged in .
        // The value above need to be provided in millisconds
        httpOnly: true, // Else it will work only in secure
      });
      console.log('login success');
      if (isMatched) res.status(200).json({ message: 'Login Successful' });
      else
        res
          .status(403)
          .json({ message: 'Access Denied : Invalid Credentials' });
    } else {
      // Handle the case where userLogin is null
      res
        .status(400)
        .json({ message: 'Invalid Email ID. Pls register before signing in' });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
