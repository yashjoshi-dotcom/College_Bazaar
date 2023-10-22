// Importing required libraries
import express from 'express';
import jwt_Authenticate from '../middlewares/jwt_authenticate';

// Using Express Router Class
const router = express.Router();

// form page to get profile details after verifying the JWT token using middle Ware
router.get(
  '/',
  jwt_Authenticate,
  (req: express.Request, res: express.Response) => {
    res.status(200).send(req.rootUser);
  }
);

export default router;
