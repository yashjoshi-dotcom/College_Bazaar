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
// Importing required libraries
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
// Using Express Router Class
const router = express_1.default.Router();
// The below mentioned function is responisble for allow ing users to log in.
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email_id, password } = req.body;
        // Checking if both email id and password is entered
        if (!email_id || !password) {
            return res.status(400).json({ error: 'incomplete Data' });
        }
        // Checking if Email Id exists and if not request registering as a new account
        const userLogin = yield userSchema_1.default.findOne({ email_id });
        // Check if userLogin is not null
        if (userLogin) {
            // Comparing the entered password with the one present in dB
            const isMatched = yield bcryptjs_1.default.compare(password, userLogin.password);
            // Generatig JWT authentication token
            const token = yield userLogin.generateAuthToken();
            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 25892000000),
                // The value above need to be provided in millisconds
                httpOnly: true, // Else it will work only in secure
            });
            console.log('login success');
            if (isMatched)
                res.status(200).json({ message: 'Login Successful' });
            else
                res
                    .status(403)
                    .json({ message: 'Access Denied : Invalid Credentials' });
        }
        else {
            // Handle the case where userLogin is null
            res
                .status(400)
                .json({ message: 'Invalid Email ID. Pls register before signing in' });
        }
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = router;
