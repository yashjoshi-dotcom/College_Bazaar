// Importing required libraries
const express = require('express');
const jwt_Authenticate = require('../middlewares/jwt_authenticate');

// Using Express Router Class
const router = express.Router();

// form page to get profile details after verifying the JWT token using middle Ware
router.get('/', jwt_Authenticate, (req, res) => {
  res.status(200).send(req.rootUser);
});

module.exports = router;
