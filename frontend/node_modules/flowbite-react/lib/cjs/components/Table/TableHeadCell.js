"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeadCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TableHeadCell = ({ children, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("th", { className: (0, classnames_1.default)('px-6 py-3', className), ...props, children: children }));
};
exports.TableHeadCell = TableHeadCell;
