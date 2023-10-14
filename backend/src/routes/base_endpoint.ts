// Importing required libraries
import express from 'express';

// Using Express Router Class
const router = express.Router();

// Get the whole data from the database
router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('The API base endpint is working correctly');
});

export default router;
