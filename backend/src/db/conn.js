// Importing the mongoose library
const mongoose = require('mongoose');

// Connecting to the MongoDB database using the connection string from the environment variable DB
mongoose
  // The connect method returns a promise that resolves when the connection is successful
  .connect(process.env.DB)
  // If the connection is successful, log a message to the console
  .then(() => console.log('Connection is successful'))
  // If there is an error while connecting, log the error to the console
  .catch((err) => console.log(err));
