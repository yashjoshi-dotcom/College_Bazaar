// Importing required libraries
import express from 'express';
import User from '../models/userSchema';

// Using Express Router Class
const router = express.Router();

// Get the whole data from the database
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    // const user = await User.find({});
    const user = await User.find({}).select({ list: 1 });

    console.log(user);
    res.status(200).send(user);
  } catch (err) {
    // Consoling error for proper debugging.
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

export default router;
