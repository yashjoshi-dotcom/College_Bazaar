"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TableContext_1 = require("./TableContext");
const TableRow = ({ children, className, ...props }) => {
    const { striped, hoverable } = (0, TableContext_1.useTableContext)();
    return ((0, jsx_runtime_1.jsx)("tr", { "data-testid": "table-row-element", className: (0, classnames_1.default)({
            'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700': striped,
            'hover:bg-gray-50 dark:hover:bg-gray-600': hoverable,
        }, className), ...props, children: children }));
};
exports.TableRow = TableRow;
