// Importing required libraries
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/userSchema');
const jwt_Authenticate = require('../middlewares/jwt_authenticate');

// Using Express Router Class
const router = express.Router();

// Register the data of a new member into the DB
router.post('/register', async (req, res) => {
  const { name, email_id, college_name, password } = req.body;
  // Checking if all data has been recieved on the backend.
  if (!name || !email_id || !password) {
    return res.status(409).json({
      error:
        'Bad Request:{Conflict with server db schema} Plz enter all data..',
    });
  }
  // Checking if the Email-ID has @dtu.ac.in domain name
  const domain = email_id.substring(email_id.lastIndexOf('@') + 1);
  if (domain !== 'dtu.ac.in') {
    return res.status(400).json({
      error: "Bad Request: Only DTU institutional email ID's allowed.",
    });
  }

  try {
    // Checking if Email Id already exists in the dB and if it exists returning message back
    const userLogin = await User.findOne({ email_id });
    if (userLogin)
      return res.status(403).json({
        error: '{Forbidden to create multiple accounts} Email already exists',
      });

    const user = new User({ name, email_id, college_name, password });
    // Hashing the password and c_password with help of middle ware and bcrypt in db/conn.js
    // Callling save method to add the data to the database
    await user.save();
    console.log(user);
    res.status(201).json({ message: 'Registered sucessfully' });
  } catch (err) {
    // Consoling error for proper debugging.
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

// Get the data of an indiviual by his Object_id
router.get('/register/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const single_user = await User.findById(_id);
    console.log(single_user);
    res.status(200).send(single_user);
  } catch (err) {
    // Consoling error for proper debugging.
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

// The below mentioned function is responisble for allow ing users to log in.
router.post('/signin', async (req, res) => {
  try {
    const { email_id, password } = req.body;
    /// Checking if both email id and password is entered
    if (!email_id || !password) {
      return res.status(400).json({ error: 'incomplete Data' });
    }
    // Checking if Email Id exists and if not request registering as a new account
    const userLogin = await User.findOne({ email_id });
    console.log(userLogin);
    if (!userLogin)
      res
        .status(400)
        .json({ message: 'Invalid Email ID. Pls register before signing in' });
    // Comparing the entered password with the one present in dB
    const isMatched = await bcrypt.compare(password, userLogin.password);
    // Generatig JWT authentication token
    const token = await userLogin.generateAuthToken();
    res.cookie('jwtoken', token, {
      expires: new Date(Date.now() + 25892000000), // The cookie will expire in 30 days from the date the user had logged in .
      // The value above need to be provided in millisconds
      httpOnly: true, // Else it will work only in secure
    });

    // Cosnoling Data of User who has logged in for developer's convinience
    console.log(userLogin);

    if (isMatched) res.status(200).json({ message: 'Login Successful' });
    else
      res.status(403).json({ message: 'Access Denied : Invalid Credentials' });
  } catch (err) {
    console.log(err);
  }
});

// The below function will be used to delete data of an indiviual fron the database .
router.delete('/del/:id', async (req, res) => {
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

// The given function adds a new listed item into the database and update list array.
router.patch('/add_data/:id', async (req, res) => {
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

// form page to get profile details after verifying the JWT token using middle Ware
router.get('/profilec', jwt_Authenticate, (req, res) => {
  res.status(200).send(req.rootUser);
});

// Get the whole data from the database
router.get('/db', async (req, res) => {
  try {
    const user = await User.find({});
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
