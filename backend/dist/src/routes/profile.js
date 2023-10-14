"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required libraries
const express_1 = __importDefault(require("express"));
const jwt_authenticate_1 = __importDefault(require("../middlewares/jwt_authenticate"));
// Using Express Router Class
const router = express_1.default.Router();
// form page to get profile details after verifying the JWT token using middle Ware
router.get('/', jwt_authenticate_1.default, (req, res) => {
    res.status(200).send(req.rootUser);
});
exports.default = router;
