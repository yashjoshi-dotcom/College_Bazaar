// Importing dotenv library to use relevant local environment variables.
require('dotenv').config({ path: 'config.env' });

// Establishing connection to the database hosted on mogodb atlas
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB)
  .then(() => console.log('Connection is sucessful'))
  .catch((err) => console.log(err));
