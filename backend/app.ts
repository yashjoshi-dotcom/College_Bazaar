// Importing required libraries
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Initiating Connection to the MongoDB
import './src/db/conn';

// Initialsing and using Socket.io for chat functionality
import './src/chat/socket_io';

// Importing all routes
import all_listings from './src/routes/all_listings';
import register from './src/routes/register';
import add_item from './src/routes/add_item';
import profile from './src/routes/profile';
import delete_user from './src/routes/delete_user';
import signin from './src/routes/signin';
import logout from './src/routes/logout';
import base_endpoint from './src/routes/base_endpoint';

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

export default app;
