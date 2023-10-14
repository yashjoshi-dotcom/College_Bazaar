"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing the mongoose library
const mongoose_1 = __importDefault(require("mongoose"));
// Connecting to the MongoDB database using the connection string from the environment variable DB
// Check if process.env.DB has a value
if (process.env.DB) {
    // The connect method returns a promise that resolves when the connection is successful
    mongoose_1.default
        .connect(process.env.DB)
        // If the connection is successful, log a message to the console
        .then(() => console.log('Connection is successful'))
        // If there is an error while connecting, log the error to the console
        .catch((err) => console.log(err));
}
else {
    // Handle the case where process.env.DB is undefined
    console.error('No connection string provided in process.env.DB');
}
