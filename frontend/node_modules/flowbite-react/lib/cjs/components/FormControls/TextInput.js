"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const HelperText_1 = __importDefault(require("./HelperText"));
exports.TextInput = (0, react_1.forwardRef)(({ sizing = 'md', shadow, helperText, addon, icon: Icon, color = 'gray', ...props }, ref) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.formControls.textInput;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: theme.base, children: [addon && (0, jsx_runtime_1.jsx)("span", { className: theme.addon, children: addon }), (0, jsx_runtime_1.jsxs)("div", { className: theme.field.base, children: [Icon && ((0, jsx_runtime_1.jsx)("div", { className: theme.field.icon.base, children: (0, jsx_runtime_1.jsx)(Icon, { className: theme.field.icon.svg }) })), (0, jsx_runtime_1.jsx)("input", { className: (0, classnames_1.default)(theme.field.input.base, theme.field.input.colors[color], theme.field.input.withIcon[Icon ? 'on' : 'off'], theme.field.input.withAddon[addon ? 'on' : 'off'], theme.field.input.withShadow[shadow ? 'on' : 'off'], theme.field.input.sizes[sizing]), ...theirProps, ref: ref })] })] }), helperText && (0, jsx_runtime_1.jsx)(HelperText_1.default, { color: color, children: helperText })] }));
});
exports.TextInput.displayName = 'TextInput';
