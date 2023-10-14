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
// delete_user.ts
// Importing required libraries
const express_1 = __importDefault(require("express"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const jwt_authenticate_1 = __importDefault(require("../middlewares/jwt_authenticate"));
// Using Express Router Class
const router = express_1.default.Router();
// The below function will be used to delete data of an indiviual fron the database .
router.delete('/', jwt_authenticate_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.userID;
        const single_user = yield userSchema_1.default.findByIdAndDelete(_id);
        res.status(200).json({
            message: `Successfully removed ${single_user} from the database.`,
        });
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ error: 'We are experiencing some server problems!!' });
    }
}));
exports.default = router;
