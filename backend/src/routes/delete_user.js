// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');
const jwt_Authenticate = require('../middlewares/jwt_authenticate');

// Using Express Router Class
const router = express.Router();

// The below function will be used to delete data of an indiviual fron the database .
router.delete('/', jwt_Authenticate, async (req, res) => {
  try {
    const _id = req.userID;
    const single_user = await User.findByIdAndDelete(_id);
    res
      .status(200)
      .json({ message: 'Successfully removed the user from the database.' });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

module.exports = router;
