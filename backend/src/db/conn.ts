// Importing the mongoose library
import mongoose from 'mongoose';

// Connecting to the MongoDB database using the connection string from the environment variable DB
// Check if process.env.DB has a value
if (process.env.DB) {
  // The connect method returns a promise that resolves when the connection is successful
  mongoose
    .connect(process.env.DB)
    // If the connection is successful, log a message to the console
    .then(() => console.log('Connection is successful'))
    // If there is an error while connecting, log the error to the console
    .catch((err: Error) => console.log(err));
} else {
  // Handle the case where process.env.DB is undefined
  console.error('No connection string provided in process.env.DB');
}
