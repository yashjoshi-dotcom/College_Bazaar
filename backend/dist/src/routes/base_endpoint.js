"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required libraries
const express_1 = __importDefault(require("express"));
// Using Express Router Class
const router = express_1.default.Router();
// Get the whole data from the database
router.get('/', (req, res) => {
    res.status(200).send('The API base endpint is working correctly');
});
exports.default = router;
