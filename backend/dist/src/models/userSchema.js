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
// userSchema.ts
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email_id: {
        type: String,
        required: true,
    },
    college_name: {
        type: String,
        default: 'Delhi Technological University',
    },
    password: {
        type: String,
        required: true,
    },
    blacklisted: {
        type: Boolean,
        default: false,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    wishlist: [String],
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    list: [
        {
            item_name: {
                type: String,
            },
            item_price: {
                type: Number,
            },
            item_age: {
                type: Number,
            },
            item_condition: {
                type: Number,
            },
            item_image: {
                type: String,
            },
            item_tag: {
                type: String,
                enum: [
                    'Others',
                    'Clothing_essentials',
                    'Books',
                    'Daily-use',
                    'Sports',
                    'Stationary',
                ],
            },
            item_description: {
                type: String,
            },
            item_status: {
                type: String,
                enum: ['under_approval', 'approved', 'deleted', 'blacklisted'],
            },
        },
    ],
});
// Hashing the password (middle ware function {pre : ensures that the function is called before save on auth.js file})
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // This ensures that we are not hashing password repeatedly by ensuring that hash is only called when password field is modified
        if (this.isModified('password')) {
            // This ensures the password is being hashed and number of hashing rounds =10.
            this.password = yield bcryptjs_1.default.hash(this.password, 12);
        }
        next();
    });
});
// Generating JWT Token
userSchema.methods.generateAuthToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const token_ = String(jwt.sign({ _id: this._id }, `${process.env.JWT_KEY}`));
            // // Here token_ is the value derrived from above line whereas token refers to the one present in userSchema
            // this.tokens.push({ token: token_ });
            const token_ = String(jsonwebtoken_1.default.sign({ _id: this._id }, `${process.env.JWT_KEY}`));
            const token = { token: token_ };
            this.tokens.push(token);
            yield this.save();
            return token_;
        }
        catch (err) {
            console.log(err);
        }
    });
};
const User = mongoose_1.default.model('Main_Collection', userSchema);
exports.default = User;
