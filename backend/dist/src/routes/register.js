"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// register.ts
// Importing required libraries
const express_1 = __importDefault(require("express"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
// Using Express Router Class
const router = express_1.default.Router();
// Register the data of a new member into the DB
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email_id, college_name, password } = req.body;
    // Checking if all data has been recieved on the backend.
    if (!name || !email_id || !password) {
        return res.status(409).json({
            error: 'Bad Request: Please enter all the required data.',
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
        const userLogin = yield userSchema_1.default.findOne({ email_id });
        if (userLogin)
            return res.status(403).json({
                error: '{Forbidden to create multiple accounts} Email already exists',
            });
        const user = new userSchema_1.default({ name, email_id, college_name, password });
        // Hashing the password and c_password with help of middle ware and bcrypt in db/conn.js
        // Callling save method to add the data to the database
        yield user.save();
        res.status(201).json({ message: 'Registered sucessfully' });
    }
    catch (err) {
        // Consoling error for proper debugging.
        console.log(err);
        res
            .status(500)
            .json({ error: 'We are experiencing some server problems!!' });
    }
}));
exports.default = router;
