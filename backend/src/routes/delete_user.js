// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');

// Using Express Router Class
const router = express.Router();

// The below function will be used to delete data of an indiviual fron the database .
router.delete('/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const single_user = await User.findByIdAndDelete(_id);
    // Logging the user that has been deleted for developer's convenience.
    console.log(single_user);
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
