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
// logout.ts
// Importing required libraries
const express_1 = __importDefault(require("express"));
const jwt_authenticate_1 = __importDefault(require("../middlewares/jwt_authenticate"));
// Using Express Router Class
const router = express_1.default.Router();
// The below function will be used to delete data of an indiviual fron the database .
router.get('/', jwt_authenticate_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // remove the current token from the db
        //  res.rootUser.tokens = res.rootUser.tokens.filter((currentElement)=>{
        //     return  currentElement.token!= req.token
        //   })
        // removing all instances of login : More Secure
        req.rootUser.tokens = [];
        res.clearCookie('jwtoken');
        yield req.rootUser.save();
        res.redirect('/home');
        console.log('logout succesful');
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ error: 'We are experiencing some server problems!!' });
    }
}));
exports.default = router;
