// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');
const jwt_Authenticate = require('../middlewares/jwt_authenticate');

// Using Express Router Class
const router = express.Router();

// The given function adds a new listed item into the database and update list array.
router.patch('/', jwt_Authenticate, async (req, res) => {
  try {
    const {
      item_name,
      item_price,
      item_age,
      item_condition,
      item_image,
      item_tag,
      item_description,
    } = req.body;

    // Check if all required fields are present
    if (
      !item_name ||
      !item_price ||
      !item_age ||
      !item_condition ||
      !item_image ||
      !item_tag ||
      !item_description
    ) {
      return res.status(400).json({
        error: 'Bad Request: Please enter all the required data.',
      });
    }

    // Check if item_price is a valid number
    if (Number.isNaN(item_price)) {
      return res.status(400).json({
        error: 'Bad Request: Invalid item price.',
      });
    }

    // Check if item_age is a valid number
    if (Number.isNaN(item_age)) {
      return res.status(400).json({
        error: 'Bad Request: Invalid item age.',
      });
    }

    // Check if item_condition is a valid number between 1 and 5
    if (
      Number.isNaN(item_condition) ||
      item_condition < 1 ||
      item_condition > 5
    ) {
      return res.status(400).json({
        error: 'Bad Request: Invalid item condition.',
      });
    }

    // Check if item_tag is a valid value
    const validItemTags = [
      'Others',
      'Clothing_essentials',
      'Books',
      'Daily-use',
      'Sports',
      'Stationary',
    ];
    if (!validItemTags.includes(item_tag)) {
      return res.status(400).json({
        error: 'Bad Request: Invalid item tag.',
      });
    }

    const newItem = {
      item_name,
      item_price,
      item_age,
      item_condition,
      item_image,
      item_tag,
      item_description,
    };

    await User.findOneAndUpdate(
      {
        _id: req.userID,
      },
      {
        $addToSet: {
          list: newItem,
        },
      }
    );

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
