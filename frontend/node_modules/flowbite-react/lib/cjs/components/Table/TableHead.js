"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHead = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TableHead = ({ children, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("thead", { className: (0, classnames_1.default)('bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400', className), ...props, children: (0, jsx_runtime_1.jsx)("tr", { children: children }) }));
};
exports.TableHead = TableHead;
