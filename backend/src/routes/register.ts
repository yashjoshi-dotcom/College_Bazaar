// register.ts
// Importing required libraries
import express from 'express';
import User from '../models/userSchema';

// Using Express Router Class
const router = express.Router();

// Register the data of a new member into the DB
router.post('/', async (req: express.Request, res: express.Response) => {
  const { name, email_id, college_name, password } = req.body;
  // Checking if all data has been recieved on the backend.
  if (!name || !email_id || !password) {
    return res.status(409).json({
      error: 'Bad Request: Please enter all the required data.',
    });
  }
  // Checking if the Email-ID has @dtu.ac.in domain name
  const domain = email_id.substring(email_id.lastIndexOf('@') + 1);
  if (domain !== 'dtu.ac.in') {
    return res.status(400).json({
      error: "Bad Request: Only DTU institutional email ID's allowed.",
    });
  }

  try {
    // Checking if Email Id already exists in the dB and if it exists returning message back
    const userLogin = await User.findOne({ email_id });
    if (userLogin)
      return res.status(403).json({
        error: '{Forbidden to create multiple accounts} Email already exists',
      });

    const user = new User({ name, email_id, college_name, password });
    // Hashing the password and c_password with help of middle ware and bcrypt in db/conn.js
    // Callling save method to add the data to the database
    await user.save();
    res.status(201).json({ message: 'Registered sucessfully' });
  } catch (err) {
    // Consoling error for proper debugging.
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

export default router;
