"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const HelperText = ({ value, children, color = 'default', ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.formControls.helperText;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)("p", { className: (0, classnames_1.default)(theme.base, theme.colors[color]), ...theirProps, children: value ?? children ?? '' }));
};
exports.default = HelperText;
