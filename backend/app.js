// Importing required libraries
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Initiating Connection to the MongoDB
require('./src/db/conn');

// Initialsing and using Socket.io for chat functionality
require('./src/chat/socket_io');

// Importing all routes
const all_listings = require('./src/routes/all_listings');
const register = require('./src/routes/register');
const add_item = require('./src/routes/add_item');
const profile = require('./src/routes/profile');
const delete_user = require('./src/routes/delete_user');
const signin = require('./src/routes/signin');
const logout = require('./src/routes/logout');
const base_endpoint = require('./src/routes/base_endpoint');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Setting Routes
app.use('/db', all_listings);
app.use('/add_data', add_item);
app.use('/register', register);
app.use('/signin', signin);
app.use('/del', delete_user);
app.use('/profilec', profile);
app.use('/logout', logout);
app.use('/', base_endpoint);

module.exports = app;
