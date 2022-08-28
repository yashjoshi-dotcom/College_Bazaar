"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineTime = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TimelineTime = ({ children, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("time", { className: (0, classnames_1.default)('mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500', className), ...props, children: children }));
};
exports.TimelineTime = TimelineTime;
