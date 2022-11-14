// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');

// Using Express Router Class
const router = express.Router();
// The given function adds a new listed item into the database and update list array.
router.patch('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const newItem = {
      item_name: req.body.item_name,
      item_price: req.body.item_price,
      item_age: req.body.item_age,
      item_condition: req.body.item_condition,
      item_immage: req.body.item_image,
      item_tag: req.body.item_tag,
      item_description: req.body.item_description,
    };
    console.log(newItem);

    await User.findOneAndUpdate(
      {
        email_id: req.params.id,
      },
      {
        $addToSet: {
          list: newItem,
        },
      }
    );
    console.log(User);
    res
      .status(201)
      .json({ message: 'Listing successfully added on the website' });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

module.exports = router;
