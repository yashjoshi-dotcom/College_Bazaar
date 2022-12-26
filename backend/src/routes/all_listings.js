// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');

// Using Express Router Class
const router = express.Router();

// Get the whole data from the database
router.get('/', async (req, res) => {
  try {
    // const user = await User.find({});
    const user = await User
  .find({})
  .select({ "list": 1});

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

module.exports = router;
