// delete_user.ts
// Importing required libraries
import express from 'express';
import User from '../models/userSchema';
import jwt_Authenticate from '../middlewares/jwt_authenticate';

// Using Express Router Class
const router = express.Router();

// The below function will be used to delete data of an indiviual fron the database .
router.delete(
  '/',
  jwt_Authenticate,
  async (req: express.Request, res: express.Response) => {
    try {
      const _id = req.userID;
      const single_user = await User.findByIdAndDelete(_id);
      res.status(200).json({
        message: `Successfully removed ${single_user} from the database.`,
      });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: 'We are experiencing some server problems!!' });
    }
  }
);

export default router;
