"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TableCell = ({ children, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("td", { className: (0, classnames_1.default)('px-6 py-4', className), ...props, children: children }));
};
exports.TableCell = TableCell;
