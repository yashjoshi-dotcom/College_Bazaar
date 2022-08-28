"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineTitle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TimelineTitle = ({ children, className, as = 'h3', ...props }) => {
    const Tag = as;
    return ((0, jsx_runtime_1.jsx)(Tag, { className: (0, classnames_1.default)('text-lg font-semibold text-gray-900 dark:text-white', className), ...props, children: children }));
};
exports.TimelineTitle = TimelineTitle;
