// Importing required libraries
const express = require('express');

// Using Express Router Class
const router = express.Router();

// Get the whole data from the database
router.get('/', (req, res) => {
  res.status(200).send('The API base endpint is working correctly');
});

module.exports = router;
