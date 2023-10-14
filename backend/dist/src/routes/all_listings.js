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
const userSchema_1 = __importDefault(require("../models/userSchema"));
// Using Express Router Class
const router = express_1.default.Router();
// Get the whole data from the database
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const user = await User.find({});
        const user = yield userSchema_1.default.find({}).select({ list: 1 });
        console.log(user);
        res.status(200).send(user);
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
